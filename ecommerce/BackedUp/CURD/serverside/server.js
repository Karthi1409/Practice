const express = require('express');
const PORT = 4000;
const mongoose = require('mongoose');
const mongourl = "mongodb+srv://Karthi:Karthi@cluster0.4xse8.mongodb.net/crud?retryWrites=true&w=majority";
mongoose.connect(mongourl) 
    .then( () => {
        console.log("DB is running in server");
    } )


const app = express();

app.listen(PORT, (res,err) => {
    console.log("Server is running in Port :",PORT);
})