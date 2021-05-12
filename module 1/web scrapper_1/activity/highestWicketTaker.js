let matchLink = "https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/full-scorecard";

const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
// request is a higher order function

request(matchLink,cb);

function cb(error,response,data){
    // console.log(data);
    // fs.writeFileSync("./match.html",data);
    getHighestWicketTaker(data);
}

// let htmlKaData = fs.readFileSync("./match.html","utf8");
function getHighestWicketTaker(data){

let myDocument = cheerio.load(data));
let bothBowlingTables = myDocument(".table.bowler");
// console.log(bothBowlingTables.length);
// console.log(bothBowlingTables);
// fs.writeFileSync("./bowlingTables.html",bothBowlingTables +"");

let highestWicketTakerName;
let highestWicketTaken;
let economyOfHighestWicketTaker;

for(let i=0; i<bothBowlingTables.length; i++){
    let bowlingTable = myDocument(bothBowlingTables[i]);
    let allTableRows = bowlingTable.find("tbody tr");

    for(let j=0; j<allTableRows.length; j++){
        let allTds = myDocument(allTableRows[j]).find("td");
        if(i==0 && j==0){
            highestWicketTakerName = myDocument(allTds[0]).find("a").text();
            highestWicketTaken = myDocument(allTds[4]).text();
            economyOfHighestWicketTaker = myDocument(allTds[5]).text();
        }
        else{
            let currentWicket = myDocument(allTds[4]).text();
            let currentEconomy = myDocument(allTds[5]).text();
            if(currentWicket > highestWicketTaken  || (currentWickets == highestWicketsTaken && currentEconomy < economyOfHighestWicketTaker)){
                highestWicketTakerName = myDocument(allTds[0]).find("a").text();
                highestWicketTaken = currentWicket;
                economyOfHighestWicketTaker = myDocument(allTds[5]).text(); 
            }
        }
    }
}

console.log("Name : " + highestWicketTakerName);
console.log("Wicket : " + highestWicketTaken);
console.log("Economy : " + economyOfHighestWicketTaker);
}

