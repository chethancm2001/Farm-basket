const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
	name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
        min : 1
    },
    description : {
        type : String,
        default : 'Test Description'
    },
    thumbUrl : {
        type : String,
        default : "https://avatars.githubusercontent.com/u/60804161?v=4"
    },
    uploadedBy : {
        type : mongoose.SchemaTypes.ObjectId,
        ref :'farmer',
        required : true
    },
    isAvailable : {
        type : Boolean,
        default : true
    }
})

module.exports = mongoose.model('Item',itemSchema)
