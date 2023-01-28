const farmerModel = require('../models/Farmer')

async function checkFarmer(req,res,next){
    let id = req.id
   let result = await farmerModel.findById(id)
   if(result){
    next()
   }else{
    res.status(401).json({"message":"unautorized"})
   }
}
module.exports = checkFarmer