//load mysql
const mysql = require('mysql2');

//mysql connection 
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodeJs"
});


//Checking connection is done or not
/*connection.connect((err)=>{
    if(err)
    {
        console.log("Error connecting to MySQL:"+err)
    }
    else
    {
        console.log("Connected to MySQL")
    }
});*/


//fetch data from database 
/* connection.query("select * from Student",(err,result)=>{
    console.log(result)
}); */


