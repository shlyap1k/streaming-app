const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CameraSchema = new Schema({
    url: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    description: {
        type: String
    }
})

const PostModel = mongoose.model('cameras', CameraSchema)

module.exports = PostModel