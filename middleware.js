const express = require('express');
const app = express();
//export Router from express module
const route = express.Router();

//Middleware in same file
//Middleware will take three parameters 
module.exports =  reqFilter = (req,res,next)=>{
    if(!req.query.age)
    {
        res.send("Please provide a age")
    }
    else if(req.query.age<18)
    {
        res.send("You can not access this page because you are below 18")
    }
    else
    {
        next()
    }
    
}



/*  
//Application level middleware it will give restriction to all page

app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send('Welcome to home page')
})

app.get('/admin',(req,res)=>{
    res.send('Welcome to admin page')
})*/


app.listen(8080)

//_______________Apply middleware on single route__________________//

// app.get('/',(req,res)=>{
//     res.send("Welcome to home page")
// })

// //this will be restricted
// app.get('/admin',reqFilter,(req,res)=>{
//     res.send("Welcome to admin page")
// })


//___________I use middleware in htmlpageloaded.js file by importing this middleware____________________


//apply middelware in the group of route level 

route.use(reqFilter);

app.get('/user',(req,res)=>{
    res.send("This is user page...")
})

app.get('/about',(req,res)=>{
    res.send("This is about page...")
})
route.get('/',(req,res)=>{
    res.send("Welcome to home page..")
})

route.get('/admin',(req,res)=>{
    res.send("Welcome to admin page...")
})

app.use('/',route)