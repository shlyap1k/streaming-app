const Camera = require('../models/camera-model')
const config = require('../../config/config')
const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

module.exports.camera_get = async (req, res) => {
    const cameras = await Camera.find({})
    res.status(200).json({cameras})
}

module.exports.camera_post = async (req, res) => {
    const token = req.cookies['jwt']
    if (token) {
        jwt.verify(token, config.secret, async (err, decodedToken) => {
            const { url, name, description } = req.body;

            const camera = await Camera.create({url, name, description});

            res.status(200).json({camera})
        });
    }
}