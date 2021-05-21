//Promises Chaining => to avoid primise hell

//Initial state is pending
 //Either the pending promise can be resolved or rejected 
 //if pending promise is resolved => success callback is invoked 
 //if pending promise is rejected => failure callback is invoked

 //scb can be attatched to pending promise using then function
 //fcb can be attatched to pending promise using catch function

 //then and catch can only be called on pending promises.

 //then() and catch() functions are async functions.
//then and catch also returns a pending promise also knows as thenKaPromise.

 const fs = require("fs");

 let f1KaPromise = fs.promises.readFile("./f1.txt");
 let f1KaPromise =  f1KaPromise.then(function(f1KaData){
     console.log(f1KaData+"");
     let f2KaPromise = fs.promises.readFile("./f2.txt");
     return f2KaPromise;
 })
 .then(function(f2KaData){
    console.log(f2KaData);
    let f3KaPromise = fs.promises.readFile("./f3.txt");
    return f3KaPromise;
 })
 .then(function(f3KaData){
     console.log(f3KaData);
 })

 