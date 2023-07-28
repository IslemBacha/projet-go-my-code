const mongoose = require('mongoose')

const panierSchema = new mongoose.Schema({
    quantityP: Number,
    prixTotal : Number,
    owner : {
        type : mongoose.Types.ObjectId,
        ref :"alaya"
    },
    product : {
        type : mongoose.Types.ObjectId,
        ref :"samer"
    },
    addition : {
        type : Boolean
    },
    date : String
})

module.exports = mongoose.model("panier",panierSchema)