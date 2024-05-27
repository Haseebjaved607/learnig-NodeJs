//url handling

const http = require("http");

const fs = require("fs");
console.log(fs)
const url = require("url")

const myServer = http.createServer((req , res) =>{
    if(req.url === "/favicon.ico") return res.end();
    const userData = `${Date.now() }: ${req.url} new request recived \n`;
    const myUrl = url.parse(req.url, true);   
    console.log(myUrl);
    fs.appendFile("userRecord.txt", userData, (err,data)=>{     
        switch(myUrl.pathname){
            case "/": res.end("home page")
            break;
            case "/search": 
            const search = myUrl.query.search_query;
            res.end("here are your result for " + search);
            break;
            case"/about":
            const qp = 
            res.end("i am haseeb javed")
            break;
            default : res.end("404 page not found")    
        }
         
    // ("hello from sever") without using any conditional statement you have to write this with res.end("hello form server")

    });
     
});

myServer.listen(8000, ()=> console.log("sever started!"));
