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

// Code for payment integration
// ----------------------------
const Razorpay = require('razorpay');
const razorpayInstance = new Razorpay({
    key_id: process.env.razorpay_key_id,
    key_secret: process.env.razorpay_key_secret
});
app.post('/createOrder', (req, res)=>{
	const {amount,currency,receipt, notes} = req.body;	
	razorpayInstance.orders.create({amount, currency, receipt, notes},
		(err, order)=>{
		if(!err)
			res.json(order)
		else
			res.send(err);
		}
	)
});
app.get('/createOrder', (req, res)=>{
    const user = "Twinkle";
    const req_title= "Product_name";
    res.render('createOrder', { user:user});
});
app.post("/api/payment/verify",(req,res)=>{
    let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
   
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256', 'BdGbp8nBieQuqD5QFTEcQLDT')
                                     .update(body.toString())
                                     .digest('hex');
                                     console.log("sig received " ,req.body.response.razorpay_signature);
                                     console.log("sig generated " ,expectedSignature);
     var response = {"signatureIsValid":"false"}
     if(expectedSignature === req.body.response.razorpay_signature)
      response={"signatureIsValid":"true"}
         res.send(response);
     });




app.listen(4000,()=>{
    console.log('server is runing')
})


