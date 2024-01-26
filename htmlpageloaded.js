const e = require('express');
const express = require('express')
//import middleware from middleware file
const reqFilter = require('./middleware')
//path module help us to access folder of our project
const path=require('path');

const app = express();
//here we can get all path of htmlpages folder in publicpath variable
const publicPath=path.join(__dirname,'htmlpages');

//static method is come from express module and static method is used to load static pages
//http://localhost:8080/about.html
//app.use(express.static(publicPath));

 //without using extension in url file can access using get method
app.get('/about',(_,res) => {
    res.sendFile(`${publicPath}/about.html`)
})


app.listen(8080)


//EJS template
app.set('view engine','ejs')

app.get('/profile',reqFilter,(_,res)=>{
    const userdata ={
        username:"Priyanka Chalak",
        email:'chalakpriyanka08@gmail.com',
        skills:['java','nodeJs','react','javascript']
    }
    res.render('profile',{userdata});
})


//Login page
app.get('/login',(req,res)=>{
    res.render('login');
})



//handle 404 error
app.get('*',(_,res)=>{
    res.sendFile(`${publicPath}/pageNotFound.html`)
})
