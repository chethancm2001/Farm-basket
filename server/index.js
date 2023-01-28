const express = require('express')
const config = require('./config')
const cors = require('cors')

const routes = require('./routes/routes')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:"*"}))
config();
app.use('/', routes)


app.listen(4000,()=>{
    console.log('server is runing')
})