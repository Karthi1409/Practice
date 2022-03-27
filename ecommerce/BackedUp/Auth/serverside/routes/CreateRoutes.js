const express = require("express")
const router = express.Router()
const stdmodel = require("../models/candidRegister")

router.post('/register', (request,response) => {
    stdmodel.create(request.body)
            .then( (result) => {
                console.log("user inserted successfully")
                response.status(201).send("user created successfully")
            } )
            .catch( (err) => {
                console.log(err);
                response.status(404)
            } )
})

module.exports=router;