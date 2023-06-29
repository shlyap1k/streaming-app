const jwt = require('jsonwebtoken')
const User = require('../models/user-model')
const config = require('../../config/config')
const cookieParser = require('cookie-parser')

const requireAuth = (req, res, next) => {
    const token = req.cookies['jwt']
    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.status(401)
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.status(401).json({error: "auth error"});
    }
};

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, config.secret, async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};


module.exports = { requireAuth, checkUser };