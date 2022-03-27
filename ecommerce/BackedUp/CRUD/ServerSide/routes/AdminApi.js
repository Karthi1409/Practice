const express = require('express')

const Router = express.Router()

const Admin = require('../models/Admin')

Router.post('/register', (request,response) => {
    Admin.create(request.body)
        .then( (result) => {
            console.log(result);
            response.send(result)
            response.end()
        } )
})

Router.get('/user', (request,response) => {
    Admin.find()
        .then( (result) => {
            console.log(result)
            response.send(result)
        } )
})

module.exports = Router
