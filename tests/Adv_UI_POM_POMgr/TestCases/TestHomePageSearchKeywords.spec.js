const { test, expect } = require('@playwright/test');
const POManager = require('../Pages/POManager.js');
const testData =  JSON.parse(JSON.stringify(require("../TestData/test_data.json")));



console.log("\n============================== Prod Bug 108: Test Home Page Search Keywords ==============================")


/**
 * Case: Search List of Keywords
 *      - Single TC will search for all the keyword in one go, one by one
 *      - Not a a very good apprach as TC count will be considered 1
 *      - What is something will fail then whole TC will be considered as fail
 * 
 * 
 * npx playwright test --headed TestHomePageSearchKeywords.spec.js
 * 
 */
test('TC004_Search_For_Text', async ({ page }) => {
    const keywordArray = testData.TC004;
    console.log("###Array:  ",keywordArray);

    for(const key of keywordArray){
        const poManager = new POManager(page);
        const homePageNew = poManager.getHomePageNew();
        await homePageNew.openBaseURL();
        console.log("###Keyword:  ", key);
        await homePageNew.searchForKeyword(key);
        //TODO: Rest of the verification  
    }
})






/**
 * Case: Search List of Keywords
 *      - Single TC will inside a For Loop
 *      - But TC Name need to be updated on every run else "Duplicate Test Title" error will come
 *      - We will pass test data using backtick `
 *      - TC count will depend on the list of element passed to the TC
 * 
 */
for(const i of testData.TC004){
    test(`TC004_Search_For_Text_${i}`, async ({ page }) => {
        const poManager = new POManager(page);
        const homePageNew = poManager.getHomePageNew();
        await homePageNew.openBaseURL();
        console.log("###Keyword:  ",i);
        await homePageNew.searchForKeyword(i);
        //TODO: Rest of the verification    
    })
}



