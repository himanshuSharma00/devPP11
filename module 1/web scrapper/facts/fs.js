const fs = require("fs");
const cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html","utf8");
// console.log(htmlKaData);
let myDocument = cheerio.load(htmlKaData);
// console.log(myDocument);
let h1KaData = myDocument("h1").text();

// console.log(h1KaData);
