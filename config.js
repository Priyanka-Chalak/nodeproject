const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'nodeJs'
});


//This code is used to only for checking puropse means connection is done or not  
/*connection.connect((err)=>{
    if(err)
    {
        console.log("Error connecting to MySQL:"+err)
    }
    else
    {
        console.log("Connected to MySQL")
    }
})*/


module.exports=connection;

