const express = require('express')
const mongoose = require('mongoose')
const Buyer = require('./routes/BuyerAPI')

mongoose.connect()
    .then(() => {
        console.log("DB is Connected");
    })
    .catch((err) => {
        console.log("err");
    })

const PORT = 7000
const app = express()
app.use(express.json())
app.use("/buyer",Buyer)
app.listen(PORT, () => {
    console.log("Server is running on PORT :",PORT);
})