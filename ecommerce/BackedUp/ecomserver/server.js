const express = require('express');
const server = express();
const http = require('http').createServer(server);
const bodyParser = require('body-Parser');
const { env } = require('process');

server.use(bodyParser.json());
server.use(express.json());

const studentList = [
    {
        firstName : 'Karthik',
        LastName : 'P',
        age : 26
    },
    {
        firstName : 'Keyan',
        LastName : 'A',
        age : 20
    },
    {
        firstName : 'Panneer',
        LastName : 'R',
        age : 58
    }
]

server.get('/api/demo', (request,response) => {
    response.status(200).send(studentList);
})



const port = process.env.port || 8000;

http.listen(port, () => {
    console.log("Server is running");
})