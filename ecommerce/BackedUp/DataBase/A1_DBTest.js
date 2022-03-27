const {Client}=require('pg')

const connectionString="postgres://postgres:guru@localhost:5432/fullstack16"

const client=new Client(connectionString)

client.connect()

client.query(querySting,(err,res)=>{
console.log(res);
client.end()
})