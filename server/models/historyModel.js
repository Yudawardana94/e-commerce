const mongoose = require('mongoose')

let historySchema = new mongoose.Schema({
    userId : mongoose.Schema.Types.ObjectId,
    productId : mongoose.Schema.Types.ObjectId,
    ammount : Number,
    date : Date,
    status : String
})

let History = mongoose.model('History',historySchema)

module.exports = History
