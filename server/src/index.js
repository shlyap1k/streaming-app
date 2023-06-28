const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    config = require('../config/config'),
    jwt = require('jsonwebtoken'),
    authRoutes = require('./routes/authRoutes');

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
app.use(require('./routes/posts'))
app.use(authRoutes);
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

mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection ...`)
        app.listen(process.env.PORT || config.port,
            () => console.log(`Server start on port ${config.port} ...`))
    })
    .on('error', error => console.warn(error))