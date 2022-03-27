// mongodb+srv://Karthi:Karthi@cluster0.4xse8.mongodb.net/crud?retryWrites=true&w=majority  -- Mongodb URL

const express = require('express');
const cors = require('cors')
const PORT = 4000;
const BuyerRoute = require('../ServerSide/routes/BuyerApi')
const SellerRoute = require('../ServerSide/routes/SellerApi')
const AdminRoute = require('../ServerSide/routes/AdminApi')
const mongoose = require('mongoose');
const mongourl = "mongodb+srv://Karthi:Karthi@cluster0.4xse8.mongodb.net/crud?retryWrites=true&w=majority"

mongoose.connect(mongourl, {useNewUrlParser: true,useUnifiedTopology: true})
.then(() => {
    console.log("db connected");
})
.catch((err) => {
    console.log(err);
})

mongoose.Promise = global.Promise;

const app = express();
app.use(cors())
app.use(express.json())
app.use('/Buyer',BuyerRoute)
app.use('/Seller',SellerRoute)
app.use('/Admin',AdminRoute)
app.listen(PORT, () => {  
    console.log("Server is running on PORT :", PORT);
})

