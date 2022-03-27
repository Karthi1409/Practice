const mongoose = require('mongoose')
const schema = mongoose.Schema

const newStudent = new schema({
    stdname : {
        type : String,
        required : [true,'enter the studentName']
    },
    mobile : {
        type : String,
        required : [true,'enter the mobile number']
    },
    email : {
        type : String,
        required : [true,'enter the email address']
    },
    doj : {
        type : String,
        required : [true,'Enter the joining date']
    }
})

const detailsmodel = mongoose.model('stdtable',newStudent)

module.exports = detailsmodel