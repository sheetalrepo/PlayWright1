const { test, expect } = require('@playwright/test');
const POManager = require('../Pages/POManager.js');
const testData =  JSON.parse(JSON.stringify(require("../TestData/test_data.json")));


console.log("\n============================== Prod Bug 108: Test Base URL passing via CMD ==============================")



/**
 * Run via Git Bash
 *      BASE_URL=https://practice.expandtesting.com/ npx playwright test --headed TestBaseURLFromCMD.spec.js --grep "@cmd"
 *      BASE_URL=https://qa.practice.expandtesting.com/ npx playwright test --headed TestBaseURLFromCMD.spec.js --grep "@cmd"
 *      npx playwright test --headed TestBaseURLFromCMD.spec.js --grep "@cmd"             //Default = Prod URL
 * 
 */


test('TC001_Successful_Login_Test_With_cmd', { tag: '@cmd'}, async ({ page }) => {
    
    //Page Objects
    const poManager = new POManager(page);
    const homePageNew = poManager.getHomePageNew();    
    const loginPageNew = poManager.getLoginPageNew();

    //Reading test data from JSON
    const userName = testData.TC001.userName;
    const password = testData.TC001.password;
    console.log("###Login with ",userName, " & ", password);
    
    //Home Page
    await homePageNew.openBaseURLCmd();  //Read BaseURL from CMD
    await homePageNew.goToLoginPage();

    //Login Page
    await loginPageNew.verifyLoginPage();
    const successMessage = await loginPageNew.loginWithUserPassword(userName, password);
    console.log("Success Message: ",successMessage)
    expect(successMessage).toBe("You logged into a secure area!");

})