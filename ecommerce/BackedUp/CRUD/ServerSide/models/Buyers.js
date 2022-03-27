const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BuyerSchema = new Schema( {
    userName : {
        type: String,
        required: [true,'Enter your username']
    },
    passWord : {
        type : String,
        required: [true, 'Enter your password']
    }
} )

const Buyer = mongoose.model('Buyer', BuyerSchema)


module.exports= Buyer;