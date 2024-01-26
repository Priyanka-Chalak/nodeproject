console.log("Program started....")

setTimeout(()=>{
    console.log("this will execute after 2 second")
},2000)


setTimeout(()=>{
    console.log("this will execute after 0 second")
},0)


console.log("Prgoram ended...")

//drawback of asynchronous
let x = 10;
let y = 0;

setTimeout(()=>{
    y=40;
    console.log("this is drawback")
},2000);

//It will print 10 because y value will update after 2 second so
console.log(x+y)


//for handle above situation we need to use promises
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(40)
    },2000)
})

waitingData.then((data)=>{
    console.log(x + data)
})


//NodeJs Architecture
//first main function will call in Call Stack after that console.log("Program started....") this will come in Call Stack and it will execute
//setTimeOut function is come from c++
//so which things or concept comes from c++ that will firstly store in Node APIs
//after that setTimeOut function will come to CallBack Queue and stop there still main function is present in Call Stack 
//when Call Stack will be Empty then setTimeOut function will come in Call Stack and it ill execute 