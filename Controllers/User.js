const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
const User = require('../Models/User')


exports.signup =async(req,res)=>{
    try {
        const {image,name,email,password}= req.body
        
        const found = await User.findOne({email})
        if(found){
            return res.status(400).send({errors:[{msg:"email elready exist"}]})
        }
        const newUser= new User(req.body)
        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
         const hashedpassword = bcrypt.hashSync(password, salt)
         newUser.password= hashedpassword
         await newUser.save()
         const payload = {id:newUser._id}
         var token = jwt.sign(payload,process.env.privateKey)

         res.status(200).send({msg:"user added",newUser,token})

     } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not SignUP"}]})
        
    }
}
exports.signIN = async(req,res)=>{
    try {
        const {name,email,password}= req.body
        const found = await User.findOne({email})
        if(!found){
            return res.status(400).send({errors:[{msg:"Email or password invalid"}]})
        }
        const matched = bcrypt.compareSync(password,found.password)
        if(!matched){
        return res.status(400).send({errors:[{msg:"Email or password invalid"}]})
        }
        
         const payload = {id:found._id}
        var token = jwt.sign(payload,process.env.privateKey)
         res.status(200).send({msg: "signIN",found,token})
        
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not SignIN"}]})
        
    }
}
exports.ReadUser = async(req,res)=>{
    try {
       const users = await User.find()
       res .status(200).send({msg:'User List',users})
       
    } catch (error) {
       res.status(500).send({errors:[{msg:"Could Not get User"}]})
       
    }
   }
exports.UpdateUser = async(req,res)=>{
    try {
        const {id}= req.params
        await User.findByIdAndUpdate(id,{$set: req.body})
        res.status(200).send({msg:'User updated'})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not update User"}]})
        
    }
}
exports.deleteUser = async(req,res)=>{
    try {
        const {id}= req.params
        await User.findByIdAndDelete(id)
        res.status(200).send({msg:'User deleted'})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not update User"}]})
        
    }
}
exports.getoneUser = async(req,res)=>{
    try {
        const {id}= req.params
        const oneUser = await User.findById(id)
        res.status(200).send({msg:'User:',oneUser})
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"Could Not get one User"}]})
        
    }
   }

