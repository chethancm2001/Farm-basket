const express = require('express')

const routes = require('./routes/routes')
const app = express()
const Farmer = require('./models/Farmer')
const Customer = require('./models/Customer')
const Item = require('./models/Item')
const Order = require('./models/Order')
app.use('/', routes)

app.listen(4000,()=>{
    console.log('server is runing')
})