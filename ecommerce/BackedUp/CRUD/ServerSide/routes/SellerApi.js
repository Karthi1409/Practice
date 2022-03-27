const express = require('express')

const router = express.Router()

const Seller = require('../models/Sellers')

router.post('/register', (request, response) => {
    Seller.create(request.body)
        .then( (result) => {
            console.log(result);
            response.send('Seller collection created successfully')
            response.end()
        } ) 
})

router.get( '/user', (request,response) => {
    Seller.find()
    .then( (result) => {
        response.send(result)
    } ) 
} )

module.exports = router;