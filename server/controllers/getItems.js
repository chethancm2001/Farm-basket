const Item = require('../models/Item')
async function getItems(req,res){
    let result = await Item.find({})
    res.json({"data":result})
}
module.exports = getItems