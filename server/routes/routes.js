const routes = require('express').Router()



routes.get('/',(req,res)=>{
    res.send("this is from routes")
})

module.exports = routes