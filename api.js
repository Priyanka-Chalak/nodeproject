//___________________Creating simple API__________________ 
//1.import http module :: const http = require('http)

const http = require('http');

// Take data from this file only
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'application\json'});
//     res.write(JSON.stringify( {name:"Ganesh",email:'ganesh@gmail.com'}));
//     res.end();
// }).listen(4200);


//_________________import data from data.js file ______________
//take data from another file
const data =require('./data')
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4200);
