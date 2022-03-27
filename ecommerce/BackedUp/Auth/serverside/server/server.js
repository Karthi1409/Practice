const express = require("express") 
const mongoose = require("mongoose")
const candidRouter = require("../routes/CreateRoutes")
const cors = require('cors')
const PORT = 5000;
const mongourl = "mongodb+srv://Karthi:Karthi@cluster0.4xse8.mongodb.net/node?retryWrites=true&w=majority";


mongoose.connect(mongourl) 
    .then( () => {
        console.log("DB connected");
    })
    .catch( (err) => {
        console.log(err);
    })

const app = express()
app.use(cors())
app.use(express.json())
app.use("/candid",candidRouter)
app.listen( PORT, () => {
    console.log("server started at port",PORT);
})
