const { Client } = require('pg')


const format = require('pg-format')

const condition = "user_id=2"
const querySting = format("update vcentrystudents set mobile=20202 where " + condition)

const connectionString = "postgres://postgres:Karthi@localhost:5432/fullstack16"

const client = new Client(connectionString)

client.connect()

client.query(querySting, (err, res) => {
    console.log(err);
    console.log(res);
    client.end()
})