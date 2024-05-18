// const fs = require("fs");

// import fs from "fs"
// import os from "os"

// console.log(os.cpus().length)
// //async --> non- blocking
// fs.writeFile("./text.txt" , "hello there" , (err) =>{});

// //sync -->blocking
// fs.writeFileSync("./text.txt" , "how are you doing");

// const show = fs.readFileSync("./contact.txt" , "utf-8")
// // console.log(show);

//read file
// fs.readFile("./text.txt" , "utf-8" , (err , result) =>{});

// fs.readFile("./contact.txt" , "utf-8" , (err , result) =>{
//     if(err){
//         console.log("the error is" ,err)
//     }else{
//         console.log(result);
//     }
// add new data do not overwrite 

// fs.appendFileSync("./text.txt" , new Date().getDate().toLocaleString())
// fs.appendFileSync("./text.txt" ,  ` ${Date.now()} hey thererer\n `)
//copy file 

// fs.cpSync("./text.txt" , "./copy.txt")
//unlink file or delete file
// fs.unlinkSync("./text.txt"); 

// console.log(fs.statSync("./text.txt").isFile());

//create folder
// fs.mkdirSync("document" , {recursive:true});
//remove folder

// fs.rm("./document",{recursive:true}, function (error) {
//     if (error) console.log(error)
//     else console.log("removed")
// })