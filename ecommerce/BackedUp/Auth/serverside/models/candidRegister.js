const mongoose = require("mongoose")
const Schema = mongoose.Schema
const RegistorSchema = new Schema({
    name : {
        type : String,
        required : [true,"Enter the name"]
    },
    mobile : {
        type : String,
        required : [true,"Enter the mobile Number"]
    },
    email : {
        type : String,
        required : [true,"Enter the email"]
    },
    address : {
        type : String,
        required : [true,"Enter the address"]
    }
})

const stdmodel = mongoose.model('stdreg',RegistorSchema)

module.exports = stdmodel;