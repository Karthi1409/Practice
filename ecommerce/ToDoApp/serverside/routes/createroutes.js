const express = require('express')
const stdmodel = require('../models/detailsmodel')

const router = express.Router()

router.post('/register', (request,response) => {
    stdmodel.create(request.body) 
    .then(result => {
        console.log(result);
        response.send('user created successfully')
    }) 
    .catch(err => {
        console.log(err);
    }) 
    // console.log(request.body);
})

module.exports = router;