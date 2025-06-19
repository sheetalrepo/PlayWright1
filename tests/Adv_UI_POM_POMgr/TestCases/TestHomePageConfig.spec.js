const { test, expect } = require('@playwright/test');
const POManager = require('../Pages/POManager.js');
const testData =  JSON.parse(JSON.stringify(require("../TestData/test_data.json")));



console.log("\n============================== Prod Bug 108: Test Home Page Config ==============================")



/**
 * Run via:
 *      npx playwright test  --headed TestHomePageConfig.spec.js --config playwright.config2.js --project=my_chrome_config
 * 
 */
test('Verify Base URL Navigation', async ({ page, baseURL }) => {    
    const poManager = new POManager(page);
    const homePageNew = poManager.getHomePageNew();
    await homePageNew.openBaseURLConfig({baseURL});
    await homePageNew.searchForKeyword("Hola");
    await expect(page).toHaveURL(baseURL);
})
