const Item = require('../models/Item')
const mongoose = require('mongoose')

async function itemAdder(req,res){
let  uploadedBy = mongoose.Types.ObjectId("63d579fd991124456d4cfa17".trim())
let {name ,price ,discription,thumbUrl} = req.body;
console.log(name,price ,discription,thumbUrl,uploadedBy)
try {
    let item = new Item({name,price,discription,thumbUrl,uploadedBy});
    let result = await item.save()
    return res.send(result)
    
} catch(err) {
    console.log(err)
    return res.status(400).json({
        message : err
    })
}

}

module.exports = itemAdder