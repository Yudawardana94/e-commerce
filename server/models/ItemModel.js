const mongoose = require('mongoose')
const userModel = require('./userModel')

let ItemSchema = new mongoose.Schema({
    name : String,
    image : String,
    category: String,
    description : String,
    stock : Number,
    price : Number,
    created : Date
})

let Item = mongoose.model('Item',ItemSchema)

module.exports = Item