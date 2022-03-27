const express= require('express');
const app = express();
const PORT = 4444;


// app.get()
// app.post() 
// app.put() 
// app.patch()
// app.delete() 


app.get('/home', (request,response) => {
    console.log("Get request");
    response.send({userName : 'Karthik'})
    response.end()
})


app.listen(PORT, (res,err) => {
    console.log("Server is running at PORT :"+ PORT);
})