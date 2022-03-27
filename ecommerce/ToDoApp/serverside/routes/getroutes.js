const express = require('express')
const stdmodel = require('../models/detailsmodel')

const router = express.Router()

router.get('/getdetails', (request,response) => {
   stdmodel.find()
    .then((res) => {
        console.log(res);
        response.send(res)
   })
    .catch((err) => {
        console.log(err);
    })
    // console.log(request.body);
})

module.exports = router;