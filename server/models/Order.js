const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
	orderedBy : {
        type : mongoose.SchemaTypes.ObjectId,
        required : true
    },
    itemId : {
        type : mongoose.SchemaTypes.ObjectId,
        required : true
    },
    orderedOn : {
        type : Date,
        default : () => Date.now()
    }
})

module.exports = mongoose.model('order', orderSchema)
