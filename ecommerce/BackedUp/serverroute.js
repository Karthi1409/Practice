const http = require('http')
const PORT = 4000
const file = require('fs');
const path = "../input/sample.txt"

http.createServer((request, response) => {

    console.log(request.url);

    if (request.url == '/read') {
        file.readFile(path, (err, data) => {

            console.log("Read file -----", data);// read but object format
            console.log("Read file -----", data.toString());
        })
    }
 if (request.url == '/readsync') {
        let readData = file.readFileSync(path)
        console.log("readFileSync ----", readData.toString());
    }

    if (request.url == '/write') {
        const newData = "additional content";
        file.writeFile(path, newData, (err) => {
            console.log(err);
        })
    }
if (request.url == '/append') {
        const newData = "additional content";

        file.appendFile(path, newData, (err) => {
            console.log(err);
        })
    }

    response.end()

}).listen(PORT, () => {
    console.log('Server started at ', PORT);
})