const { test, expect } = require('@playwright/test');
const { log } = require('console');



test('Test JS Confirm - OK', async ({page}) =>{

     //Locators
     const javaScriptDialogsTitle = page.locator('text="JavaScript Dialogs"');
     const jsConfirm = page.locator('button#js-confirm');
     const dialogResponse = page.locator('p#dialog-response');
     
     //When
     await page.goto('https://practice.expandtesting.com/');
     await javaScriptDialogsTitle.click();

     //JS Confirm OK
     page.on('dialog', x => x.accept());    //Pre defined action to click 'OK' button
     await jsConfirm.click();               //As soon as popup appear here, it will click 'OK' automatically from previous step 

     //Verification
     const responseOK = await dialogResponse.textContent(); 
     console.log(">>>" + responseOK);

     console.log("===========================#Prodbug108#===========================");
})




test('Test JS Confirm - Cancel', async ({page}) =>{

     //Locators
     const javaScriptDialogsTitle = page.locator('text="JavaScript Dialogs"');
     const jsConfirm = page.locator('button#js-confirm');
     const dialogResponse = page.locator('p#dialog-response');
     
     //When
     await page.goto('https://practice.expandtesting.com/');
     await javaScriptDialogsTitle.click();

     //JS Confirm CANCEL
     page.on('dialog', x => x.dismiss());  //Pre defined action to click 'Cancel' button
     await jsConfirm.click();

     //Verification
     const responseCancel = await dialogResponse.textContent(); 
     console.log(">>>" + responseCancel);


     console.log("===========================#Prodbug108#===========================");
})