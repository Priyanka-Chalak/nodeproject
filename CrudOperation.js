//load express
const express = require('express');
//import config file
const connection = require('./config')
//execute express
const app = express();
//this will convert data which is come from request body that will convert in json format
app.use(express.json());

app.get('/getAllData',(req,res)=>{
    connection.query("select * from Student",(err,result)=>{
        if(err)
        {
            res.send("error....")
        }
        else
        {
            res.send(result)
        }
    })
});


app.post('/add',(req,res)=>{
    const data = req.body;
      connection.query('insert INTO Student SET ?',data,(err,result)=>{
        if(err) throw err;
        res.send(result)
      })
});


app.put('/update/:studentId',(req,res)=>{
    const data = [req.body.LastName,req.body.FirstName,req.body.City,req.params.studentId]
    connection.query("update Student SET LastName=?,FirstName=?,City=? where studentId=?",data,(err,result)=>{
        if(err) throw err;
        res.send("Student data updated successfully...")
    });
})


app.delete('/delete/:studentId',(req,res)=>{
    connection.query("DELETE FROM Student where studentId="+req.params.studentId,(err,result)=>{
        if(err) throw err;
        res.send(result)
    });
   
})
app.listen(4200);