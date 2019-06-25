const mongoose = require('mongoose')
const userModel = require('./userModel')

let productSchema = new mongoose.Schema({
    // creator : [{ type: Schema.Types.ObjectId, ref: userModel }],
    name : String,
    description : String,
    price : Number,
    stock : Number,
    condition : String,
    location : String
})

let Product = mongoose.model('Product',productSchema)

module.exports = Product