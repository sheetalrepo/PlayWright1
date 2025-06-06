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
 * npx playwright test  --headed  TestLoginPageNew.spec.js
 * npx playwright test  --headed  .\TestLoginPageNew.spec.js
 */


console.log("\n============================== Prod Bug 108: Login Case ==============================")
test('TC001_Successful_Login_Test_With_PO_Manager', async ({ page }) => {
    
    //Page Objects
    const poManager = new POManager(page);
    const homePageNew = poManager.getHomePageNew();    
    const loginPageNew = poManager.getLoginPageNew();

    //Reading test data from JSON
    const userName = testData.TC001.userName;
    const password = testData.TC001.password;
    console.log("###Login with ",userName, " & ", password);
    
    //Home Page
    await homePageNew.openBaseURL();
    await homePageNew.goToLoginPage();

    //Login Page
    await loginPageNew.verifyLoginPage();
    const successMessage = await loginPageNew.loginWithUserPassword(userName, password);
    console.log("Success Message: ",successMessage)
    expect(successMessage).toBe("You logged into a secure area!");

})



/**
 * Scenario:
 *      - To test mult user logins
 *      - for loop
 *      - back tick as TC name need to be diff on every run
 * 
 */
// for(const data of testData.TC005){
//     test(`TC005_Successful_Login_Test_${data.userName}`, async ({ page }) => {
//         //Page Objects
//         const poManager = new POManager(page);
//         const homePageNew = poManager.getHomePageNew();    
//         const loginPageNew = poManager.getLoginPageNew();

//         //Reading test data from JSON
//         const userName = data.userName;
//         const password = data.password;
//         console.log("###Mult Login with ",userName, " & ", password);
    
//         //Home Page
//         await homePageNew.openBaseURL();
//         await homePageNew.goToLoginPage();

//         //Login Page
//         await loginPageNew.verifyLoginPage();
//         const successMessage = await loginPageNew.loginWithUserPassword(userName, password);
//         console.log("Success Message: ",successMessage)
//         expect(successMessage).toBe("You logged into a secure area!");
//     })
// }






/**
 * Testing Tagging
 */
test('Sample Login 1', { tag: '@sanity'}, async ({ page }) => {
    console.log("###Sample Login 1: Sanity Case"); 
    await page.goto('https://practice.expandtesting.com/');
});

test('Sample Login 2', { tag: '@reg_tc'}, async ({ page }) => {
    console.log("###Sample Login 2: Reg Case"); 
    await page.goto('https://www.google.com/');
});

test('Sample Login 3', { tag: ['@reg_tc', '@sanity'] }, async ({ page }) => {
    console.log("###Sample Login 3: Reg && Sanity Case"); 
    await page.goto('https://www.youtube.com/@prodbug108');
});


test('Sample Login 4', { tag: '@sanity'}, async ({ page }) => {
    console.log("###Sample Login 4: Sanity Case"); 
    await page.goto('https://www.yahoo.com/');
});

//Another Type of Tagging
test('Sample Login 5 @sanity', async ({ page }) => {
    console.log("###Sample Login 5: Sanity Case"); 
    await page.goto('https://www.msn.com/');
});




/**
 * Run via Git Bash
 *      BASE_URL=https://practice.expandtesting.com/ npx playwright test --headed TestLoginPageNew.spec.js --grep "@cmd"
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