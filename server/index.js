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

// product upload 
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })


app.listen(4000,()=>{
    console.log('server is runing')
})