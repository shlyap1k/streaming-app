const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CountSchema = new Schema({
    url: {
        type: String,
        unique: true
    },
    people_count: {
        type: Number
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const CountModel = mongoose.model('counters', CountSchema)

module.exports = CountModel