const { body, validationResult } = require('express-validator');


exports.signupvalidator =[

    body('email','you must enter an email').isEmail(),
    body('password','you password must an contain 8 char ').isLength({min:8})
]
exports.signINvalidator = [
    body('email','You must enter an email').isEmail()
 ]

exports.validation =(req,res,next)=>{
const result = validationResult(req);
  if (!result.isEmpty()) {
   return res.status(400).send({ errors: result.array() });
  }
  next()
}


