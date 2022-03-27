const http  = require('http');
const PORT = 4444;
const file = require('fs');
const path = './input/sample.txt';

http.createServer( (request,response) => {

    if (request.url == '/read') {
        file.readFile(path, (err,data) => {
            // console.log(data);
            console.log(data.toString());
        } )
    }

    if (request.url == '/readsync') {
        let readData = file.readFileSync(path)
        console.log(readData.toString());
    }   

    if (request.url == '/write') {
        let writeData = 'Hello ALL'
        file.writeFile(path, writeData, (err) => {
            console.log(err);
        })
    }

    if (request.url == '/writefile1') {
        let writeData = 'Hello ALL'
        file.appendFile ( path, writeData, (err) => {
            console.log(err);
        } )
    }
    response.end()

} ).listen(PORT, () => {
    console.log('Server is running on port :', PORT);
})