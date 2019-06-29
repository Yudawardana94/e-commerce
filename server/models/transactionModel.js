const mongoose = require('mongoose')

let transactionSchema = new mongoose.Schema({
    userId: String,
    items: Array,
    total: Number,
    status: String
})

let Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction