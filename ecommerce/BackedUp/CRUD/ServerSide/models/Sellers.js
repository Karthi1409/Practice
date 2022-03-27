const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SellerSchema = new Schema( {
    userName : {
        type : String,
        required : [true,'Enter the userName']
    },
    passWord : {
        type : String,
        required : [true,'Enter the password']
    }

} ) 

const Buyers = mongoose.model('Seller',SellerSchema)

module.exports = Buyers;
