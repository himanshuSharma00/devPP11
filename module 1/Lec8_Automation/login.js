const puppeteer = require("puppeteer");
const id = "wedax38963@rphinfo.com";
const pw = "123456";
let tab;
//puppeteer has promisified functions 

//by default headless = true;
let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
//promise<pending>
// console.log(browserOpenPromise);

browserOpenPromise.then(function( browser){
    // console.log(browserOpenPromise);
    console.log("Browser is Opened!!!");
    return browser.pages();
})
.then(function(pages){
    tab = pages[0];
    return tab.goto("https://www.hackerrank.com/auth/login");
})
.then(function(){
    // tab.waitForSelector("#input-1",{visible : true});
    return tab.type("#input-1" , id);
})
.then(function(){
    // tab.waitForSelector("#input-2",{visible : true});
    return tab.type("#input-2" , pw);
})
.then(function(){
    return tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
})
.then(function(){
    // console.log("waiting for selector");
    return waitAndClick("#base-card-1-link");
})
.then(function(){
    return waitAndClick('#base-card-6-link');
})
.then(function(){
    return tab.waitForSelector(".js-track-click.challenge-list-item",{visible : true});
})
.then(function(){
    return tab.$$(".js-track-click.challenge-list-item");
})
.then(function(allQueArrays){
    let allPendingPromises = [];
    for(let i = 0; i < allQueArrays.length; i++){
        let oneATag = allQueArrays[i];
        console.log(oneATag);
        let pendingPromise = oneATag.evaluate(function(element){ return element.getAttribute("href");},oneATag);
        allPendingPromises.push(pendingPromise);
    }
    let allPromisesCombined = Promise.all(allPendingPromises);
    return allPromisesCombined;
})
.then(function(allQueLinks){
    for(let i = 0; i < allQueLinks.length; i++){
        console.log(allQueLinks[i]);
    }
})
.catch(function(err){
    console.log(err);
})



function waitAndClick(selector){
    return new Promise(function(scb ,fcb){
        let waitPromise = tab.waitForSelector(selector);
    waitPromise.then(function(){
        let clickPromise = tab.click(selector);
    })
    .then(function(){
        scb();
    })
    .catch(function(){
        fcb();
    });
    });
}