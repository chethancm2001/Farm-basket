const consumerModel = require('../models/Farmer')

async function checkConsumer(req,res,next){
    let id = req.id
   let result = await consumerModel.findById(id)
   if(result){
    next()
   }else{
    res.status(401).json({"message":"unautorized"})
   }
}
module.exports = checkConsumer