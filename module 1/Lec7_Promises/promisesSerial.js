// Serially read content of f1 , f2 and f3 using promisified functions
const fs = require("fs");

// let f1KaPromise = fs.promises.readFile("./f1.txt");
// let f2KaPromise = fs.promises.readFile("./f2.txt");
// let f3KaPromise = fs.promises.readFile("./f3.txt");

// f1KaPromise.then(function(data){
//         console.log(data + "");
//         f2KaPromise.then(function(data){
//             console.log(data + "");
//             f3KaPromise.then(function(data){
//                 console.log(data + "");
//             });
//         });
    
//     });


// promise hell
let f1KaPromise = fs.promises.readFile("./f1.txt");
f1KaPromise.then(function(data){
    console.log(data + "");

    let f2KaPromise = fs.promises.readFile("./f2.txt");
    f2KaPromise.then(function(data){
        console.log(data + "");
        let f3KaPromise = fs.promises.readFile("./f3.txt");
        f3KaPromise.then(function(data){
            console.log(data + "");
        });
    });

});

// we can avoid promise hell by a technique => chaining