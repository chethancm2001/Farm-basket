const express = require('express')

const routes = require('./routes/routes')
const app = express()
app.use('/', routes)

app.listen(4000,()=>{
    console.log('server is runing')
})