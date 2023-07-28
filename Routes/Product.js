const express = require("express")


const { AddProduct, ReadProduct, DeleteProduct, updateProduct, getoneProduct } = require("../Controllers/Product")

const ProductRouter = express.Router()


ProductRouter.post('/AddProduct',AddProduct)

ProductRouter.get('/ReadProduct', ReadProduct)

ProductRouter.delete('/DeleteProduct/:id',DeleteProduct)

ProductRouter.put('/updateProduct/:id',updateProduct)

ProductRouter.get('/getoneProduct/:id',getoneProduct)


module.exports = ProductRouter