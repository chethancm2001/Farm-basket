const express = require('express')
const config = require('./config')


const routes = require('./routes/routes')
const app = express()


config();
app.use('/', routes)


app.listen(4000,()=>{
    console.log('server is runing')
})