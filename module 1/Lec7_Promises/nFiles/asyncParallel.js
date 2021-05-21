let files = ['../f1.txt','../f2.txt','../f3.txt'];

const fs = require("fs");

for( let file in files){
    let fileKaPromise = fs.promises.readFile(files[file]);
    fileKaPromise.then(function(data){
        console.log(data+"");
    })
} 