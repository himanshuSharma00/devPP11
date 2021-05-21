const puppeteer = require("puppeteer");
//puppeteer has promisified functions 

//by default headless = true;
let browserOpenPromise =  puppeteer.launch({headless : false});
//promise<pending>
console.log(browserOpenPromise);

browserOpenPromise.then(function( browser){
    // console.log(browserOpenPromise);
    console.log("Browser is Opened!!!");
    return browser.pages();
})
.then(function(pages){
    let tab = pages[0];
    return tab.goto("https://www.google.com");
})
.then(function(){
    console.log("On google home page");
})

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://example.com');
//     await page.screenshot({ path: 'example.png' });
  
//     await browser.close();
//   })();