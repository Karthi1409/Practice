const express = require('express');

const router = express.Router()

const Buyer = require('../models/Buyers')

router.get( '/user' , (request, response) => {
    Buyer.find()
        .then( (result) => {
            console.log("buyer UI data has been show");
            response.send(result)
            
        } )
})

router.post( '/register', (request, response) => {
    Buyer.create(request.body)
        .then( (result) => {
            console.log('Buyer collection created successfully');
            response.end()
        } )
} )


module.exports = router;