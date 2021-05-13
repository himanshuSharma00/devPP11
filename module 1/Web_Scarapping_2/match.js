const request = require("request");
const cheerio = require("cheerio");

function getMatchDetails(matchLink)
{
    request(matchLink,function(err,res,data){
        processData(data);
    })
}

function processData(html) 
{
    let myDocument = cheerio.load(html);
    let bothInnings = myDocument(".card.content-block.match-scorecard-table .Collapsible");
    for(let i=0; i<bothInnings.length; i++){
        let oneInning = myDocument(bothInnings[i]);
        let teamName = oneInning.find("h5").text();
        // console.log(teamName);
        teamName = teamName.split("INNINGS")[0].trim();
        // console.log(teamName);
        let allTrs = oneInning.find(".table.batsman tbody tr");
        for(let j=0; j<allTrs.length-1; j++){
            let allTds = myDocument(allTrs[j]).find("td");
            if(allTds.length > 1){
                //batsmanName allTds[0]
                let batsmanName = myDocument(allTds[0]).text().trim(;)
                //runs allTds[2]
                let runs = myDocument(allTds[2]).text().trim();
                //balls allTds[3]
                let balls = myDocument(allTds[3]).text().trim();
                //four allTds[5]
                let fours = myDocument(allTds[5]).text().trim();
                //sixes allTds[6]
                let sixes = myDocument(allTds[6]).text().trim();
                //sr allTds[7]
                let strikeRate = myDocument(allTds[7]).text().trim();
                console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} StrikeRate = ${strikeRate}`);
                processDetails(teamName,batsmanName,runs,balls,fours,sixes,strikeRate);
            }
        }

    }
    console.log("####################################");
}

function processDetails(teamName,batsmanName,runs,balls,fours,sixes,strikeRate){
    let isTeamFolder = checkTeamFolder(teamName);
    if(isTeamFolder){
        let isBatsmanPresent = checkBatsmanFile(teamName,batsmanName);
        if(isBatsmanPresent){
            updateBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
        }
        else{
            createBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
        }
    }
    else{
        createTeamFolder(teamName);
        createBatsmanFile(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
    }

    }
}

function checkTeamFolder(teamName){
    let teamFolderPath = `./IPL/${teamName}`;
    return false.existsSync(teamFolderPath);
}



module.exports = getMatchDetails;