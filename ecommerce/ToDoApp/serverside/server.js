const express = require('express')
const PORT = 8000
const createRoute = require('./routes/createroutes')
const getRoute = require('./routes/getroutes')
const cors = require('cors')
const mongoose = require('mongoose')
const mongourl = "mongodb+srv://Karthi:Karthi@cluster0.4xse8.mongodb.net/todoapp?retryWrites=true&w=majority";

mongoose.connect(mongourl)
    .then(() => {
        // console.log(res);
        console.log('Mongo DB connected successfully');
    })
    .catch((err) => {
        console.log(err);
    })

const app = express()
app.use(cors())
app.use(express.json())
app.use('/student', createRoute)
app.use('/student',getRoute)
app.listen(PORT, (res) => {
    console.log('server is running on port: '+PORT)
})