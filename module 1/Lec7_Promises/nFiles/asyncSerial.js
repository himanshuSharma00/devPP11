let files = ['../f1.txt','../f2.txt','../f3.txt'];
const fs = require("fs");
let idx = 0;
while(idx < files.length){
    let flag = false;
    fs.readFile(files[idx],function(data){
        console.log(data+"");
        flag = true;
    })
    if(flag){
        idx++;
    }
}

