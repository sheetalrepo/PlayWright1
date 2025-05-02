const { test, expect } = require('@playwright/test');
const HomePage = require('./HomePage.js');
const LoginPage = require('./LoginPage.js');
const RegisterPage = require('./RegisterPage.js');


/**
 * 
 * IMP: 
 *      - Need to change "userName" on every run
 * 
 * npx playwright test  --headed  .\TestRegisterPage.spec.js
 * 
 * 
 */

test('Test Register Page', async ({ page }) => {
    //Page Objects For All the required Pages
    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);

    //Const
    const userName = "TestUser10810818";
    const password = "Test1234";
        
    //Home Page
    await homePage.openBaseURL();
    await homePage.verifyHomePage();
    const homePageH1Text = await homePage.getH1Text();
    expect(homePageH1Text).toBe("Automation Testing Practice for QA and Developers");
    await homePage.goToRegisterPage();

    //Register Page
    await registerPage.verifyRegisterPage();
    await registerPage.registerNewUser(userName, password);

    //Login Page: user redirect to Login Page after Registration
    await loginPage.verifyNewRegistrationMessage();

    //Login with newly created credentials
    await loginPage.verifyLoginPage();
    const successMessage = await loginPage.loginWithUserPassword(userName, password);
    console.log("Success Message: ",successMessage)
    expect(successMessage).toBe("You logged into a secure area!");
})


