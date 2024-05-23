// // HTTP methods 

// // get push post patch delete

// // to start any script use npm run command if the script name is rather than strat else use npm start it will run automatically the file present in the start script . 

// const http = require("http");

// const fs = require("fs");

// const url = require("url")

// const myServer = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") return res.end();
//     const userData = `${Date.now()}: ${req.method} :${req.url} new request recived \n`;
//     const myUrl = url.parse(req.url, true);
//     // console.log(myUrl);
//     fs.appendFile("userRecord.txt", userData, (err, data) => {
//         switch (myUrl.pathname) {
//             case "/": res.end("home page")
//                 //if(req.method === 'GET') res.end();
//                 break;
//             case "/search":
//                 const search = myUrl.query.search_query;
//                 res.end("here are your result for " + search);
//                 break;
//             case "/about":
//                 const qp =
//                     res.end("i am haseeb javed")
//                 break;

//             case "/sign_in":
//                 const sign_in = res.end("you are in sign up page")

//                 break;
//             default: res.end("404 page not found")
//         }
//     });

// });

// myServer.listen(8000, () => console.log("sever started!"));