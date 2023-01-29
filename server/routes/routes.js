const routes = require('express').Router()

const farmerRegister = require('../controllers/farmerRegister')
const consumerRegister = require('../controllers/consumerRegister')
const consumerLogin = require('../controllers/consumerLogin')
const itemAdder = require('../controllers/itemAdder')
const getItems = require('../controllers/getItems')
const auth = require('../middleware/auth')
const checkFarmer = require('../middleware/checkFarmer')
const checkConsumer = require('../middleware/checkConsumer')
const farmerLogin = require('../controllers/farmerLogin')
const deleteItem = require('../controllers/deleteItem')


routes.get('/',(req,res)=>{
    res.send("this is from routes")
})
routes.delete('/delete-item/:id',auth,checkFarmer,deleteItem)

routes.post('/register-farmer',farmerRegister)
routes.post('/register-consumer',consumerRegister)

routes.post('/login-consumer',consumerLogin)

routes.post('/login-farmer',farmerLogin)
routes.post('/add-item',auth,checkFarmer,itemAdder)

routes.get('/get-items',getItems)



module.exports = routes