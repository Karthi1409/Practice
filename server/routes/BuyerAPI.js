const express = require('express')
const Buyer = require('../model/buyer')
const router = express.Router;

router.get("/user2", (req,res) => {
    Buyer.create(req.body) 
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router