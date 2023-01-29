const Item = require('../models/Item')
async function deleteItem(req,res){
    let item_id = req.params.id;
    let userid = req.id
    let item = await Item.findById(item_id)
    
    if(item.uploadedBy == userid){
        let result = await Item.deleteOne({_id:item_id})
    } else{
        res.status(401).json({message:"unautharoize"})
    }
    res.send(item)

}
module.exports = deleteItem