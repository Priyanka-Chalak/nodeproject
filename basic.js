var a = 20;
let b = 30;
const c = 50;
//c = 80; c variable value can not re-assign because it is constant
console.warn("addition of a, b and c is = "+(a+b+c))

//if-else condition
var x = 20

if(x==50)
{
    console.log("matched")
}
else
{
    console.log("not matched");
}

//for loop
console.log("This is for loop")
for(i = 0;i<=10;i++)
{
    console.log(+i);
}

//while loop
var i = 5
console.log("this is while loop")
while(i>0)
{
    console.log(i);
    i--;
}

//do while loop
console.log("This is do while loop")
var i = 0
do{
    console.log(i);
    i++;
}while(i<=5);

//for in loop
console.log("this is for in loop")
const arr=[2,5,6,7,8,9];
for(key in arr)
{
    console.log(arr[key])
}

//for of loop
console.log("This is for of loop")
let lang = "JavaScript"
for(let key of lang)
{
    console.log(key);
}


//use x and y of servercreation.js
console.log("Importing value from another file")
const app = require('./servercreation')
console.log(app)


//filter method
//if we want to find any specific value from array we can use of filter
console.log("filter method")
const array = [2,3,9,12,9,2]
array.filter((item)=>
{
    console.log(item)
})

console.log("finding specific value from array using filter method")
let result = array.filter((item)=>
{
    return item==2; //we can give any condition here like >,< etc.
})
console.warn(result)

//import External package of colors
const colors = require('colors');
console.log("Helloo user".red)
