const express = require('express')
const router = express.Router()
const signin = require('../models/signinmodel')

router.post('/signin', (request,response) => {

    const {userName,passWord} = request.body

    if(!userName || !passWord) {
       response.send('please enter all the fields')
    }

    signin.findOne({userName:userName}) 
        .then((existuser) => {
            if (existuser) {
                return response.status(422).json({errormessage : "User already exists"})
            }
            else {
                signin.create(request.body)
                .then( (result) => {
                    response.status(201).send(request.body)
                    console.log(result);
                } )
                .catch( (err) => {
                    console.log(err);
                } )
            }
        })
})

module.exports = router