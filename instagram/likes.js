const puppeteer = require("puppeteer");

let tab;
const phone = "himanshu.s.k";
const pw = "Hs12731856@#";

let browerKaPromise = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    args : ["--start-maximized"]
})
.then(function(browser){
    return browser.pages();
})
.then(function(pages){
    tab = pages[0];
    return tab.goto("https://www.instagram.com");
})
.then(function(){
    return tab.waitForSelector('input[name = "username"]', {visible : true});
})
.then(function(){
    return tab.type('input[name = "username"]',phone);
})
.then(function(){
    return tab.type('input[name ="password"]',pw);
})
.then(function(){
    return tab.click('.sqdOP.L3NKy.y3zKF');
})
// .then(function(){
//     return tab.waitForSelector('.sqdOP.yWX7d.y3zKF',{visible : true});
// })
// .then(function(){
//     return tab.click('.sqdOP.yWX7d.y3zKF');
// })


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