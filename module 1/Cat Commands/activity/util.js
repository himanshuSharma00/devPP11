let fs = require("fs");
function getFilesData(files){
    let filesData = "";
    for(let i = 0; i < files.length; i++){
        if(!fs.existsSync(files[i])){
            console.log("One or more file does not exist !");
            return;
        }
        if(i == files.length - 1){
            filesData += fs.readFileSync(files[i]);
        }else{
        filesData += fs.readFileSync(files[i]) + "\n";
        }
    }
    return filesData;
}

function applySFlag(data) {
    // Hey I am F1
    // space
    // space
    // space
    // space
    // space
    // Bye I am F1
    let emptyIncluded = false;
    let removedSpaces = [];
    let splittedData = data.split("\r\n");
    //   [ 'Hey I am F1', '', '', '', '',  '','Bye I am F1', '' , "Hey m also f1"];
  //   splittedData.length = 9
  // i=6;
  
    for (let i = 0; i < splittedData.length; i++) {
      if (splittedData[i] == "" && emptyIncluded == false) {
        removedSpaces.push(splittedData[i]);
        emptyIncluded = true;
      } else if (splittedData[i] != "") {
        removedSpaces.push(splittedData[i]);
        if(i < splittedData.length-2 ) emptyIncluded = false;
      }
    }
    let removedSpacesString = removedSpaces.join("\r\n");
    return removedSpacesString;
    // Hey I am F1
    // space
    // Bye I am F1
  }

module.exports.getFilesData = getFilesData;
module.exports.applySFlag = applySFlag;