const { test, expect } = require('@playwright/test');
const POManager = require('../Pages/POManager.js');
const testData =  JSON.parse(JSON.stringify(require("../TestData/test_data.json")));

/**
 * IMP: 
 * - Need to change "userName" on every run as this is registration page
 *      TestData > test_data.json > TC002 > userName
 * 
 * 
 * npx playwright test  --headed  .\TestRegisterPageNew.spec.js
 * 
 */


console.log("\n============================== Prod Bug 108: Register New User ==============================")

test('TC002_Test_Register_Page_With_PO_Manager', async ({ page }) => {
    //Page Objects
    const poManager = new POManager(page);
    const homePageNew = poManager.getHomePageNew();    
    const loginPageNew = poManager.getLoginPageNew();
    const registerPageNew = poManager.getRegisterPageNew();

    //Const
    const userName = testData.TC002.userName;
    const password = testData.TC002.password;
        
    //Home Page
    await homePageNew.openBaseURL();
    await homePageNew.verifyHomePage();
    //const homePageH1Text = await homePageNew.getH1Text();
    //expect(homePageH1Text.trim()).toBe("Automation Testing Practice WebSite for QA and Developers");
    await homePageNew.goToRegisterPage();

    //Register Page
    await registerPageNew.verifyRegisterPage();
    console.log("###Register New User With ",userName, " & ", password);
    await registerPageNew.registerNewUser(userName, password);


    //Login Page: user redirect to Login Page after Registration
    await loginPageNew.verifyNewRegistrationMessage();

    //Login with newly created credentials
    await loginPageNew.verifyLoginPage();
    const successMessage = await loginPageNew.loginWithUserPassword(userName, password);
    console.log("Success Message: ",successMessage)
    expect(successMessage).toBe("You logged into a secure area!");
})




console.log("\n============================== Prod Bug 108: Reading Test Data ==============================")

test('TC003_Test_Data_Reading', async ({ page }) => {
    //Const
    const id = testData.TC003.id;
    const zip = testData.TC003.address.zip;
    console.log("###Testing test data ",id, " & ", zip);
    console.log("TEST DATA: ", testData)
})