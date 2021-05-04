const fs = require("fs");

let f1kadata = fs.readFileSync("./f1.txt","utf8");
let f2kadata = fs.readFileSync("./f2.txt","utf8");

// -s flag functioning 
let removedSpacesString =  applySFlag(f1kadata);
function applySFlag(f1kadata){
    //   [ 'Hey I am F1', '', '', '', '',  '','Bye I am F1'];
    let emptyIncluded = false;
    let removedSpaces = [];
    let splittedData = f1kadata.split("\r\n");

    for(let i = 0; i < splittedData.length; i++){
        if(splittedData[i] == "" && emptyIncluded == false){
            removedSpaces.push(splittedData[i]);
            emptyIncluded = true;
        }else if(splittedData[i] != ""){
            removedSpaces.push(splittedData[i]);
            if (i < splittedData.length - 2) emptyIncluded = false;
        }
    }
    // console.log(removedSpaces);
    let removedSpacesString = removedSpaces.join("\r\n");
    // console.log(removedSpacesString);
    return removedSpacesString;
}

console.log(removedSpacesString);
