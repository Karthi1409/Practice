// mongodb+srv://karthi:karthi@cluster0.ah5h8.mongodb.net/curd?retryWrites=true&w=majority


const express=require('express')
const mongoose=require('mongoose')
const MONGOURL="mongodb+srv://karthi:karthi@cluster0.ah5h8.mongodb.net/curd?retryWrites=true&w=majority"

mongoose.connect(MONGOURL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

mongoose.Promise=global.Promise


const app=express()

app.listen(7000,()=>{
    console.log("server started at 7000");
})