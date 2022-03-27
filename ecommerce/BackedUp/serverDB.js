const http = require('http')
const PORT = 4000
const server = http.createServer((request, response) => {

    console.log(request.url);
    if (request.url == '/') {

        response.write("<h1> Welcome Page<h1>")
    }

    if (request.url == '/home') {
        response.write("<h1> home Page<h1>")

    }

    if (request.url == '/about') {
        response.write("<h1> about Page<h1>")

    }
    if (request.url == '/login') {
        response.write("<h1> login Page<h1>")
        response.write("<input type='text' name='username'></input>")
        response.write("<input type='password' name='password'></input>")
        response.write("<input type='submit' value='Login'></input>")
    }

    if (request.url == '/register') {
        response.write("<h1> register Page<h1>")

    }
    response.end()
})




server.listen(PORT, () => {

    console.log("server started at " + PORT);
})