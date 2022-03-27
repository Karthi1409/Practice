const mongoose = require('mongoose')

const schema = mongoose.Schema

const Buyer = new schema({
    userName : {
        type : "string",
        required : [true, "Enter the userName"]
    }
})


const BuyerModel = mongoose.model("Buyer",Buyer)

module.exports = BuyerModel;