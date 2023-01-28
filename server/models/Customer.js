const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
	name : {
        type : String,
        required : true
    },
    email : {
        type : email,
        required : true
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

module.exports = mongoose.model('customer',customerSchema)