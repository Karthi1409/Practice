const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const AdminSchema = new Schema( {
    userName : {
        type : String,
        required : [true, 'Enter the userame']
    },
    passWord : {
        type : String,
        required :[true,' Enter the password']
    }
})

const Admin = mongoose.model('Admin',AdminSchema)

module.exports = Admin

