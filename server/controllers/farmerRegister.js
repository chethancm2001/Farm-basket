const farmerModel = require('../models/Farmer')
async function farmerRegister(req,res) {
    let {email, password, name} = req.body
    try {
        let farmer = new farmerModel({name,email,password});
        let result = await farmer.save()
        return res.send(result)
        
    } catch {
        res.status(400).json({
            message : "Error while registering new farmer"
        })
    }
}

module.exports = farmerRegister