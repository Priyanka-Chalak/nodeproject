//this data is used in api.js file
module.exports = {
    x:20,
    y:10,
    z:function()
    {
        return 10;
    }
}


//*******************************CREATING BASIC SERVER************************************************ */
//creating basic server
//for creating server we need to import http core module which handle request and response
const http =require('http')

//we can use arrow function also
// const dataControl=(req,res)=>{
//     res.write("<h1>Hello, This is priyanka</h1>");
//     res.end();
// }

//http.createServer(dataControl).listen(8080);

// Simple function
// function dataControl(req,res)
// {
//     res.write("<h1>Hello, This is priyanka</h1>");
//     res.end();
// }

//we can directly write here also no need to create separate function
http.createServer((req,res)=>{
    res.write("<h1>Hello this is priyanka</h1>");
    res.end();
}).listen(8080);

//***********************************OPERATION USING COMMAND LINE************************************************ */

//Getting input from command line
//all values can get using argv
//process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched
console.log(process.argv)
//Getting specific value from command line 
console.log(process.argv[2]);

/**______________________________________________________ */
//creating file from command line
//const fs = require('fs')
const input = process.argv;
//and give file name at the time of run like this :: node servercreation.js Hello.js "This is fruit"
//fileSystem.writeFileSync(input[2],input[3]);


//add or remove file using command prompt input
//for add new file :: node servercreation.js add Hello.txt  "This is fruit"
if(input[2]=='add')
{
    fileSystem.writeFileSync(input[3],input[4]);
}
//for remove file :: node servercreation.js remove Hello.txt
else if(input[2]=='remove')
{
    fileSystem.unlinkSync(input[3]);
}
else
{
    console.log("Invalid Input")
}

//*****************************CRUD OPERATION WITH FILE SYSTEM****************************************** */

//for creating file we need to import fs 
const fileSystem = require('fs')
//console.log("Learn node js Code")

//path given of specific folder to create file in that folder
const path = require('path')
const dirPath = path.join(__dirname,'crud');  // it will give path of createdfiles folder
const filePath = `${dirPath}/curd.txt`;

//_________create file______________
fileSystem.writeFileSync(filePath,"File is created successfully");

//writeDileSync is create a new file and write string content in that new file 
//fileSystem.writeFileSync("created.js"," node js code")

//____________we can create multiple files at the same time__________
// console.log("creating multiple files ")
// const path = require('path')
// const dirPath = path.join(__dirname,'createdfiles');  // it will give path of createdfiles folder
// console.log(dirPath)
// for(i = 0; i<5;i++)
// {
//     fileSystem.writeFileSync(dirPath+"/Hello"+i+".js","Simple created files")
// }

//____________________Get all created file names and print______________________
// fileSystem.readdir(dirPath,(err,createdfiles)=>{
//     createdfiles.forEach((item)=>{
//         console.log("file name is ", item)
//     })
// })


//____________read file curd.txt_______________________
fileSystem.readFile(filePath,'utf8',(err,item)=>
{
    console.log(item)
})


//________________update file curd.txt______________________
// fileSystem.appendFile(filePath,' and file is updated',(err)=>
// {
//     if(!err)
//         console.log("updated successfully")
// })


//_________________Rename file_____________
// fileSystem.rename(filePath,`${dirPath}/curd.txt`,(err)=>{
//     if(!err)
//         console.log("file rename successfully ")
// })


//________________Delete File_______________
//fileSystem.unlinkSync(`${dirPath}/curd.txt`)