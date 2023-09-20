const http = require('node:http')

const server = http.createServer((req,res)=>{

    const data = {
        bike:"Yamaha",
        car:"Toyota"
    }

    // res.writeHead(200,{"Content_Type":"text/plain"});
    // res.end("Text from server");
    res.writeHead(200,{"Content_Type":"application/json"});
    res.end(JSON.stringify(data));
})

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})