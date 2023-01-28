const mongoose = require('mongoose')
require('dotenv').config()
function config(){
    mongoose.connect(process.env.MONGO).then(()=>{console.log('mongodb is connected')}).catch(()=>{console.log('failed to connect db')})
}
module.exports = config