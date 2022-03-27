const express = require('express');
const std = require('../models/stdmodel');
const router = express.Router()

const userDefinedMiddleware = (request,response,next) => {
    console.log("I called before the verfication");
    console.log("you are logged in user");
    next()
}

router.get('/getdetails',userDefinedMiddleware, (request,response) => {
   std.find() 
        .then( (result) => {
            console.log('I called after the verification');
            response.status(201).send(result)
        } )
        .catch( (err) => {
            response.status(401).send(err)
        } )
})

module.exports = router