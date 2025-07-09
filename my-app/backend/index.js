


require("dotenv").config();
const mongoose = require('mongoose');

const express = require('express')
const mongoDB = require('./db')
const app = express()
const port = 5000
//const myOrderDataRoute = require('./routes/OrderData');
const myOrderRoute = require('./routes/MyOrder'); // adjust path

const cors = require('cors');
app.use(cors());


mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use('/api',require("./Routes/LoginAndCreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api/auth', myOrderRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
