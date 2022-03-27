const express = require('express');
const std = require('../models/stdmodel');

const router = express.Router()

const userDefinedMiddleware = (request,response,next) => {
    console.log("I called before the verfication");
    console.log("you are logged in user");
    next()
}

router.post('/new', userDefinedMiddleware, (request, response) => {
    std.create(request.body)
        .then((res) => {
            console.log(res);
            response.send(request.body)
        })
        .catch((err) => {
            console.log(err);
        })
        
})

module.exports = router;