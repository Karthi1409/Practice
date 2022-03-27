const http = require('http');
const PORT = 4000;

http.createServer( (require,response) => {
    console.log(require.url);
    response.write('<h1>gundu papa i love you</h1>')
    response.end()

}).listen(PORT, () => {
    console.log("Server is running in port 4000");
})

