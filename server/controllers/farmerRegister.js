const Farmer = require('../models/Farmer')
function farmerRegister(req,res) {
    try {
        let {email, password, name} = req.body
        Farmer.create({
            name,
            email,
            password
        })
    } catch {
        res.status(400).json({
            message : "Error while registering new farmer"
        })
    }
}

module.exports = farmerRegister