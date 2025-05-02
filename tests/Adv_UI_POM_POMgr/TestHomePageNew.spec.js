const { test, expect } = require('@playwright/test');
const POManager = require('./POManager.js');
const testData =  JSON.parse(JSON.stringify(require("./test_data.json")));

/**
 * 
 * #features:
 *      - POManager
 *      - Reading test data from external file
 *          JSON > JSON String > JSON Object
 * 
 * npx playwright test  --headed  .\TestHomePageNew.spec.js
 */


console.log("\n============================== Prod Bug 108: Search Input Case ==============================")


/**
 * 
 * Imp:
 *      - TC Name need to be changed on every run else "duplicate test title"
 *      - backtick need to use
 *      - TC count will be 3 in this case
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



/**
 * 
 * Option 2:
 *      - Another appraoch will be to use 1 TC only and search for all the keyword in one go
 *      - Not a a very good apprach as TC count will be considered 1
 *      - Depends
 * 
 */
test('TC004_Search_For_Text_2', async ({ page }) => {
    const keywordArray = testData.TC004;
    console.log("###Array:  ",keywordArray);

    for(const i of keywordArray){
        const poManager = new POManager(page);
        const homePageNew = poManager.getHomePageNew();
        await homePageNew.openBaseURL();
        console.log("###Keyword:  ",i);
        await homePageNew.searchForKeyword(i);
        //TODO: Rest of the verification  
    }
})