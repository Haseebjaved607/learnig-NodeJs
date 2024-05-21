//building own sever


// const http = require("http");

// const fs = require("fs");

// const myServer = http.createServer((req , res) =>{
//     const userData = `${Date.now() }: ${req.url} new requist recived on \n`;
//     fs.appendFile("userRecord.txt", userData, (err,data)=>{ 
//         switch(req.url){
//             case "/": res.end("home page")
//             break;
//             case"/about":res.end("i am haseeb javed")
//             break;
//             default : res.end("404 page not found")    
//         }
         
//     ("hello from sever")
//     });
     
// });

// myServer.listen(8000, ()=> console.log("sever started!"));
//practice 
// const http = require("http");

// const myServer = http.createServer((req , res) =>{
//     res.end("hello from sever 5000")

// });

// myServer.listen(5000, ()=> console.log("chal gaya bahi")); 
