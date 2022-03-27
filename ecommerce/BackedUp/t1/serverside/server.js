const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const signstd = require('./routes/signinroute')
const createroute = require('./routes/createstd');
const getroute = require('./routes/getroute')
const PORT = 5000
const mongourl = "mongodb+srv://Karthi:Karthi@cluster0.4xse8.mongodb.net/node?retryWrites=true&w=majority";

mongoose.connect(mongourl)
    .then(() => {
        console.log("DB is connected");
    })
    .catch((err) => {
        console.log(err);
    })

mongoose.Promise=global.Promise

const app = express()
app.use(cors())
app.use(express.json())
app.use('/student',signstd)
app.use('/student',createroute)
app.use('/student',getroute)
app.listen(PORT,() => {
    console.log("server is running in port",PORT);
})