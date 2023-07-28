const Product = require('../Models/Product')

exports.AddProduct = async(req,res)=>{
    try {

      
        const newProduct = new Product(req.body)

        await newProduct.save()

        res.status(200).send({msg :"Product added",newProduct})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not Product"}]})
    }
} 
exports.ReadProduct = async(req,res)=>{
    try {
        const Products = await Product.find()
        res.status(200).send({msg : "Product List",Products})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not get Product"}]})
        
    }
}
exports.DeleteProduct = async(req,res)=>{
    try {
        const {id}= req.params
    await Product.findByIdAndDelete(id)
    res.status(200).send({msg: "Product deleted"})
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not Delete Product"}]})
    }
}
exports.updateProduct = async(req,res)=>{
    try {
        const {id}= req.params
        await Product.findByIdAndUpdate(id,{$set: req.body})
        res.status(200).send({msg:'Product updated'})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not update Product"}]})
        
    }
}
exports.getoneProduct = async(req,res)=>{
    try {
        const {id}= req.params
        const oneProduct = await Product.findById(id)
        res.status(200).send({msg:'Product:',oneProduct})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not get one Product"}]})
        
    }
   }

