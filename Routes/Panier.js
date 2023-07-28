const express = require("express")
const Panier = require("../Models/Panier")
const PanierRouter = express.Router()


PanierRouter.post('/AddPanier',async(req,res)=>{
    try {

      
        const newPanier = new Panier({...req.body, addition :false})

        await newPanier.save()

        res.status(200).send({msg :"Product added",newPanier})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not Product"}]})
    }
} )

PanierRouter.get('/ReadPanier',  async(req,res)=>{
    try {
        const paniers = await Panier.find().populate('owner').populate('product')
        res.status(200).send({msg : "Panier List",paniers})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not get panier"}]})
        
    }
})

PanierRouter.get('/ReadMyPanier/:id',  async(req,res)=>{
    try {
        const {id} = req.params
        const paniers = await Panier.find({owner : id}).populate('owner').populate('product')
        res.status(200).send({msg : "Panier List",paniers})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not get panier"}]})
        
    }
})


PanierRouter.put('/updatePanier/:id',async(req,res)=>{
    try {
        const {id}= req.params
        await Panier.findByIdAndUpdate(id,{$set: req.body})
        res.status(200).send({msg:'Panier updated'})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not update Panier"}]})
        
    }
})

PanierRouter.delete('/DeletePanier/:id',async(req,res)=>{
    try {
        const {id}= req.params
    await Panier.findByIdAndDelete(id)
    res.status(200).send({msg: "Panier deleted"})
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not Delete Panier"}]})
    }
})
module.exports = PanierRouter