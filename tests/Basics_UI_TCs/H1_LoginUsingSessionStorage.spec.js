const { test, expect } = require('@playwright/test');
const { log } = require('console');


let webContext;

/**
 * context : one instance of a browser
 * page : single tab in a browser
 * context can have multiple pages
 * 
 * 
 * Cookies location in Browser:
 *    Right Click > Inspect > Application > Storage > Cookies
 * 
 * 
 * npx playwright test --headed H1_LoginUsingSessionStorage.spec.js
 */
test.beforeAll('Before All TC', async ({browser}) =>{
     console.log("\n============================== Prod Bug 108: Before All==============================")
     //To initialize new page
     const context = await browser.newContext();  
     const page = await context.newPage();
 
     //Login
     await page.goto('https://practice.expandtesting.com/');
     await page.locator('text="Test Login Page"').click();
     await page.locator('input#username').fill('practice');     
     await page.locator('#password').fill('SuperSecretPassword!');
     await page.locator("[type='submit']").click();

     //Verification
     await page.locator('text="You logged into a secure area!"').isVisible();
     
     //Save into storage state + initalize global webContext object
     await page.waitForLoadState('networkidle');     //Wait till page get loaded and stable
     await context.storageState({path: 'storage_state.json'});  //Save all login related cookies 
     webContext = await browser.newContext({storageState: 'storage_state.json'});  // Initalize global webContext
 })


 /**
  * 
  * - No need to pass 'page' object/fixture in async() function
  * -  
  */
 test('Test Login Page', async () =>{
    console.log("\n============================== Prod Bug 108: Login==============================")
     //Creating a Page using webContext
     const page = await webContext.newPage();

     //Locators
     const testLoginPageTitle = page.locator('text="Test Login Page"');

     //Go to page
     await page.goto('https://practice.expandtesting.com/');
     await testLoginPageTitle.click();      //Already logged in User
     //await page.waitForTimeout(5000);
     await page.pause();
 })


 
 test('Test Register Page', async () =>{
    console.log("\n============================== Prod Bug 108: Register Page==============================")
     //Creating a Page using webContext
     const page = await webContext.newPage();

     //Locators
     const testRegisterPageTitle = page.locator('text="Test Register Page"');
     
     //Go to page
     await page.goto('https://practice.expandtesting.com/');
     //await page.pause();
     await testRegisterPageTitle.click();  //Already logged in User
     //await page.waitForTimeout(5000);
     await page.pause();
 })