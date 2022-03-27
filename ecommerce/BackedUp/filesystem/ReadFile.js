const file = require('fs');

const path = "../input/sample.txt"

file.readFile( path,(err, data) => {
    console.log(data);
    console.log(data.toString());
} )

const readData = file.readFileSync(path)

console.log("Hi",readData.toString());

const newData = "additional data"

// write =  override the data

file.writeFile(path, newData, (err) => {
    console.log(err);
} )

//  apppend 


file.appendFile(path, newData, (err) => {
    console.log(err);
})


file.readFile( path,(err, data) => {
    console.log(data);
    console.log(data.toString());
} )