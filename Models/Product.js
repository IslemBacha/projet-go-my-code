const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
image : String,
name: String,
quantituy: Number,
categorie : String,
prix : Number

})
module.exports = mongoose.model("samer",ProductSchema)