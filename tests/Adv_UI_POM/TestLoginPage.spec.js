const { test, expect } = require('@playwright/test');
const HomePage = require('./HomePage.js');
const LoginPage = require('./LoginPage.js');

/**
 * npx playwright test  --headed  .\TestLoginPage.spec.js
 */

test('Successful Login Test', async ({ page }) => {
    //Page Objects
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    //Const
    const userName = "practice";
    const password = "SuperSecretPassword!";
        
    //Home Page
    await homePage.openBaseURL();
    await homePage.goToLoginPage();

    //Login Page
    await loginPage.verifyLoginPage();
    const successMessage = await loginPage.loginWithUserPassword(userName, password);
    console.log("Success Message: ",successMessage)
    expect(successMessage).toBe("You logged into a secure area!");

    //await page.waitForTimeout(5000); //for demo only
})


