// fs --> file system
const fs = require('fs');
// console.log(fs);
// utf-8 --> format for plain text!!
fs.writeFileSync('f1.txt','Hello World!!');
let f1kadata = fs.readFileSync('./f1.txt');
console.log(f1kadata + "");
fs.writeFileSync('../activity/activity.js','adfhd');