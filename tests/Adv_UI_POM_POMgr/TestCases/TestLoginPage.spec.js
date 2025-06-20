const { test, expect } = require('@playwright/test');
const POManager = require('../Pages/POManager.js');
const testData =  JSON.parse(JSON.stringify(require("../TestData/test_data.json")));



console.log("\n============================== Prod Bug 108: Login Case ==============================")
/**
 * 
 * Login Case:
 *      npx playwright test --headed TestLoginPage.spec.js
 * 
 */

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
for(const data of testData.TC005){
    test(`TC005_Successful_Login_Test_${data.userName}`, async ({ page }) => {
        //Page Objects
        const poManager = new POManager(page);
        const homePageNew = poManager.getHomePageNew();    
        const loginPageNew = poManager.getLoginPageNew();

        //Reading test data from JSON
        const userName = data.userName;
        const password = data.password;
        console.log("###Mult Login with ",userName, " & ", password);
    
        //Home Page
        await homePageNew.openBaseURL();
        await homePageNew.goToLoginPage();

        //Login Page
        await loginPageNew.verifyLoginPage();
        const successMessage = await loginPageNew.loginWithUserPassword(userName, password);
        console.log("Success Message: ",successMessage)
        expect(successMessage).toBe("You logged into a secure area!");
    })
}
