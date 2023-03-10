const mongoose = require('mongoose')

const farmerSchema = new mongoose.Schema({
	name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        
    },
    password : {
        type : String,
        required : true
    },
    joinedOn : {
        type : Date,
        default : () => Date.now()
    }
})

module.exports = mongoose.model('Farmer',farmerSchema)
