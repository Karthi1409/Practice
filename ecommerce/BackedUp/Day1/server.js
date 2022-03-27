const http= require('http')
const PORT=4000


http.createServer((request,response)=>{

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
    
    response.write('hello vcentry')
    response.send('end proceed')


}).listen(PORT,()=>{
    console.log("server started at ",PORT);
})