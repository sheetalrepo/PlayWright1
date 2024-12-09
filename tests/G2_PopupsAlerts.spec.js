const { test, expect } = require('@playwright/test');
const { log } = require('console');



/**
 * Alert
 * 
 * https://playwright.dev/docs/dialogs
 */
test('Test JS Alert', async ({page}) =>{

     //Locators
     const javaScriptDialogsTitle = page.locator('text="JavaScript Dialogs"');
     const jsAlert = page.locator('button#js-alert');
     const dialogResponse = page.locator('p#dialog-response');
     
     //When
     await page.goto('https://practice.expandtesting.com/');
     await javaScriptDialogsTitle.click();

     //JS Alert OK
     page.on('dialog', x => x.accept());    //Listeners: Pre defined action to click 'OK' button
     await jsAlert.click();                 //As soon as alert appear here, it will click 'OK' automatically from previous step 

     //Verification
     const responseOK = await dialogResponse.textContent(); 
     console.log(">>>" + responseOK);

     console.log("===========================#Prodbug108#===========================");
})