const User = require('../models/user-model')
const config = require('../../config/config')
const requireAuth = require('../middleware/authMiddleware')
const jwt = require('jsonwebtoken')

module.exports.profile_get = async (req, res) => {
    const token = req.cookies['jwt']
    if (token) {
        jwt.verify(token, config.secret, async (err, decodedToken) => {
            const profile = await User.find({_id: decodedToken.id}, 'username firstname lastname')
            console.log(profile)
            res.status(200).json({profile})
        });
    }
}