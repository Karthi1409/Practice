const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sign = new Schema({
    userName : {
        type : String,
        required : [true, 'enter the username']
    },
    passWord : {
        type : String,
        required : [true, 'enter the password']
    }

})

const details = mongoose.model('login',sign)

module.exports = details