const routes = require('express').Router()
const farmerRegister = require('../controllers/farmerRegister')
const consumerRegister = require('../controllers/consumerRegister')
const consumerLogin = require('../controllers/consumerLogin')
routes.get('/',(req,res)=>{
    res.send("this is from routes")
})
routes.post('/register-farmer',farmerRegister)
routes.post('/register-consumer',consumerRegister)

routes.post('/login-consumer',consumerLogin)
module.exports = routes