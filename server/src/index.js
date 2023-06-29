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

io.sockets.on("error", e => console.log(e));
io.sockets.on("connection", socket => {
    socket.on("broadcaster", () => {
        broadcaster = socket.id;
        socket.broadcast.emit("broadcaster");
    });
    socket.on("watcher", () => {
        socket.to(broadcaster).emit("watcher", socket.id);
    });
    socket.on("offer", (id, message) => {
        socket.to(id).emit("offer", socket.id, message);
    });
    socket.on("answer", (id, message) => {
        socket.to(id).emit("answer", socket.id, message);
    });
    socket.on("candidate", (id, message) => {
        socket.to(id).emit("candidate", socket.id, message);
    });
    socket.on("viewers", (message) => {
        console.log(message)
        io.emit("viewersCount", message);
    });
    socket.on("endOfStream", (message) => {
        console.log('endOfStream')
        io.emit("endOfStream", message)
    })
    socket.on("disconnect", () => {
        socket.to(broadcaster).emit("disconnectPeer", socket.id);
    });
});

mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
        server.listen(process.env.PORT || config.port,
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error))