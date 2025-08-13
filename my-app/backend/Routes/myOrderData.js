const express = require('express')
const router = express.Router();
const Order = require('../models/Orders');
const app = express()
const { findOneAndUpdate } = require('../models/User');
const cors = require("cors");
app.use(cors());


router.post('/myOrderData', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0, 0, { Order_data: req.body.email })
    //console.log(data);

    let eId = await Order.findOne({ 'email': req.body.email })
    console.log(eId);
    console.log(req.body.email);
    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
    else {
        try {

            await Order.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            res.send("Server Error", error.message)
        }

    }
})


router.post('/OrderData', async (req, res) => {

    try {
        let myData = await Order.findOne({'email':req.body.email})
        res.json({orderData: myData })
        
    } catch (error) {
        res.send("Server Error", error.message);
    }
})

router.post('/myOrderData', async (req, res) => {
  console.log("Received request to /myOrderData");
  console.log("Email:", req.body.email);
  
});


module.exports = router;

