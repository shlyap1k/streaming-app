const Counter = require('../models/count-model')
const config = require('../../config/config')

module.exports.count_get = async (req, res) => {
    const count = await Counter.find({})
    res.status(200).json({count})
}