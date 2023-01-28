const farmerModel = require('../models/Farmer')
require('dotenv').config()
const jwt = require('jsonwebtoken')
async function farmerLogin(req,res){
let {email,password} = req.body
try{
    let result = await farmerModel.findOne({email})
   
    if(result != null){
        if(result.password == password){
           console.log(result)
            id = result._id
            let token = jwt.sign({id:result._id},process.env.SECRET_KEY)
            
            return res.json({token})

        }else{
           return  res.status(401).json({"message":"invalid password"})
        }
    }
    else{
        return  res.status(401).json({"message":"invalid email"})
    }

}
catch(err){
 res.status(400).json(err)
}
}
module.exports = farmerLogin