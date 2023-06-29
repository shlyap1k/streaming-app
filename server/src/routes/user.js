const express = require('express')
const router = express.Router()
const Post = require('../models/user-model')
const userController = require('../controllers/userController')
const {requireAuth, checkUser} = require('../middleware/authMiddleware')

router.get('/api/profile', requireAuth, userController.profile_get)

module.exports = router