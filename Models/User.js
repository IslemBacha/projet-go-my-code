const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    image : String,
    name : String,
    email : {type : String, unique : true, required : true},
    mobile : Number,
    password : {type : String, required : true}
})

module.exports = mongoose.model("alaya",userSchema)