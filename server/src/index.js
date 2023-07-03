const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    config = require('../config/config'),
    jwt = require('jsonwebtoken'),
    authRoutes = require('./routes/authRoutes'),
    userRoutes = require('./routes/user'),
    cookieParser = require("cookie-parser");


mongoose.Promise = global.Promise

const app = express()

const corsOptions = {
    origin: [
        config.client
    ],
    credentials: true,
    exposedHeaders: ["set-cookie"],
};

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(require('./routes/posts'))
app.use(authRoutes)
app.use(userRoutes)
app.use((req,
         res,
         next) => {
    if (req.headers.authorization) {
        jwt.verify(
            req.headers.authorization.split(' ')[1],
            tokenKey,
            (err, payload) => {
                if (err) next();
                else if (payload) {
                    for (let user of users) {
                        if (user.id === payload.id) {
                            req.user = user;
                            next();
                        }
                    }

                    if (!req.user) next();
                }
            }
        );
    }

    next();
});

mongoose.connect(config.dbURL, config.dbOptions)

const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: config.client,
        methods: ["GET", "POST"]
    }
});


let broadcaster
let roomIndex
let userIndex
const rooms = []

io.sockets.on("error", e => console.log(e));
io.sockets.on("connection", socket => {
    socket.on('create room', data => {
        roomIndex = rooms.map(r => r.roomName).indexOf(data.roomName)
        if (!(roomIndex > -1)) {
            rooms.push({
                streamName: data.streamName,
                roomName: data.roomName,
                members: [],
                broadcaster: socket.id
            })
        }
        socket.join(data.roomName)
        io.emit('rooms list', rooms)
    })

    socket.on('end of stream', data => {
        roomIndex = rooms.map(r => r.roomName).indexOf(data.roomName)
        if (roomIndex > -1) {
            rooms.splice(roomIndex, 1) // delete room
        }
        socket.broadcast.to(data.roomName).emit('end of stream') // event for users are watching stream
        io.emit('rooms list', rooms) // update rooms list for
        // users are not watching any stream but on page with streams list
    })

    socket.on('get rooms', () => {
        socket.emit('rooms list', rooms)
    })

    socket.on('set room preview', data => {
        roomIndex = rooms.map(r => r.roomName).indexOf(data.roomName)
        rooms[roomIndex].image = data.image
        io.emit('rooms list', rooms)
    })

    socket.on('join room', data => {
        socket.join(data.roomName)
        roomIndex = rooms.map(r => r.roomName).indexOf(data.roomName)
        if (roomIndex > -1) {
            userIndex = rooms[roomIndex].members.indexOf(data.user._id)
            if (userIndex < 0) {
                rooms[roomIndex].members.push(data.user._id)
            }
            io
                .to(data.roomName)
                .emit('stream info', {
                    viewers: rooms[roomIndex].members.length,
                    roomName: rooms[roomIndex].roomName,
                    streamName: rooms[roomIndex].streamName
                })
            socket.to(rooms[roomIndex].broadcaster).emit('join room', socket.id)
        } else {
            io.to(data.roomName).emit('end of stream')
            socket.leave(data.roomName)
        }
    })

    socket.on('left room', data => {
        socket.leave(data.roomName)
        roomIndex = rooms.map(r => r.roomName).indexOf(data.roomName)
        if (roomIndex > -1) {
            userIndex = rooms[roomIndex].members.indexOf(data.user._id)
            if (userIndex > -1) {
                rooms[roomIndex].members.splice(userIndex, 1)
            }
            io
                .to(data.roomName)
                .emit('stream info', {
                    viewers: rooms[roomIndex].members.length,
                    roomName: rooms[roomIndex].roomName,
                    streamName: rooms[roomIndex].streamName
                })
        }
    })

    socket.on('icecandidate', (id, candidate) => {
        socket.to(id).emit("icecandidate", socket.id, candidate)
    })

    socket.on('offer', (id, description) => {
        socket.to(id).emit("offer", socket.id, description)
    })

    socket.on("answer", (id, message) => {
        socket.to(id).emit("answer", socket.id, message)
    })

    socket.on("new message", (message) => {
        console.log(message)
        io.to(message.roomName).emit('new message', message)
    })
});

mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
        server.listen(process.env.PORT || config.port,
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error))