//lode express
const express = require('express');
//express executionn 
const app = express();

//In first paramater we use url and in second parameter we use arrow function in which we use request and response  
app.get('',(req,res)=>{
    //console.log("Data sent by browser/client => ",req.query.name)
    res.send("Welcome , to my homepage...");
})

app.get('/about',(req,res)=>{
    res.send("Hey..., This is my about page...")
})

app.listen(8080);

//______________Link page to other page__________________//
//Render HTML
app.get("/hello",(req,res)=>{
    res.send(`<h1>HTML tag rendering</h1><a href="/jsondata" >Go to Data Page</a> `)
})

//Taking Input on page
app.get("/input",(req,res)=>{
    res.send(` 
    <input type="text" placeholder="user name" value="${req.query.name}"/> 
    <button>Click </button>
    `) ;
})

//Render JSON Data
app.get("/jsondata",(req,res)=>{
    res.send(`[
        {
            fname:'Priyanka',
            lname:'Chalak'
        },
        {
            fname:'Ganesh',
            lname:'Chalak'
        }] 
        <a href="/hello">Go to Home page</a>` );
})