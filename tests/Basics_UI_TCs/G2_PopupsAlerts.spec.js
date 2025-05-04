const { test, expect } = require('@playwright/test');
const { log } = require('console');



/**
 * Alert
 * 
 * https://playwright.dev/docs/dialogs
 * 
 * 
 * npx playwright test --headed G2_PopupsAlerts.spec.js
 */
test('Test JS Alert', async ({page}) =>{

     //Locators
     const javaScriptDialogsTitle = page.locator('text="JavaScript Dialogs"');
     const jsAlertButton = page.locator('button#js-alert');
     const dialogResponse = page.locator('p#dialog-response');
     
     //When
     await page.goto('https://practice.expandtesting.com/');
     await javaScriptDialogsTitle.click();
                

     //JS Alert OK
     page.on('dialog', x => x.accept());    //Listeners will be activated and click 'OK' whenever it appear
     await jsAlertButton.click();           // Action: Alert will comes up

     //Verification
     const responseOK = await dialogResponse.textContent(); 
     console.log(">>>" + responseOK);

     console.log("===========================#Prodbug108#===========================");
})