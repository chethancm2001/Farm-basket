const consumerModel = require('../models/Customer')
async function consumerRegister(req,res) {
    let {email, password, name} = req.body
    try {
        let consumer = new consumerModel({name,email,password});
        let result = await consumer.save()
        return res.send(result)
        
    } catch {
        res.status(400).json({
            message : "Error while registering new consumer"
        })
    }
}

module.exports = consumerRegister