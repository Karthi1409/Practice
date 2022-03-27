const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentdetail = new Schema({
    stdname : {
        type:String,
        required:[true,'enter your name']
    }
})

const std = mongoose.model('stddetail',studentdetail)
module.exports=std