const express = require('express')
const { signup, signIN, ReadUser, UpdateUser, deleteUser, getoneUser } = require('../Controllers/User')
const { signupvalidator, validation, signINvalidator } = require('../Middelwares/Validator')
const { IsAuth } = require('../Middelwares/IsAuth')
const User = require('../Models/User')



const userRouter = express.Router()


userRouter.post('/Signup',signupvalidator,validation,signup)


userRouter.post('/signIN',signINvalidator,validation,signIN)

userRouter.get('/getCurrentUser',IsAuth,(req,res)=>res.send(req.User))

userRouter.get('/ReadUser', ReadUser)

userRouter.put('/UpdateUser/:id', UpdateUser)

userRouter.delete('/deleteUser/:id', deleteUser)

userRouter.get('/getoneUser/:id', getoneUser)


module.exports = userRouter