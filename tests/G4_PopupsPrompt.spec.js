const { test, expect } = require('@playwright/test');
const { log } = require('console');




test('Test JS Prompt - OK', async ({page}) =>{

     //Locators
     const javaScriptDialogsTitle = page.locator('text="JavaScript Dialogs"');
     const jsPromt = page.locator('button#js-prompt');
     const dialogResponse = page.locator('p#dialog-response');

     //When
     await page.goto('https://practice.expandtesting.com/');
     await page.pause();
     await javaScriptDialogsTitle.click();
  
     

     //JS Prompt - OK
     page.on('dialog', x => x.accept('ABC'));    //Pre defined action to click 'OK' button
     await jsPromt.click();                //As soon as popup appear here, it will click 'OK' automatically from previous step 
  
     //Verification
     const responseOK = await dialogResponse.textContent(); 
     console.log(">>>" + responseOK);
  
     console.log("===========================#Prodbug108#===========================");
})




test('Test JS Prompt - Cancel', async ({page}) =>{

     //Locators
     const javaScriptDialogsTitle = page.locator('text="JavaScript Dialogs"');
     const jsPromt = page.locator('button#js-prompt');
     const dialogResponse = page.locator('p#dialog-response');

     //When
     await page.goto('https://practice.expandtesting.com/');
     await page.pause();
     await javaScriptDialogsTitle.click();
  
     

     //JS Prompt - Cancel
     page.on('dialog', x => x.dismiss('ABC'));    
     await jsPromt.click();               
  
     //Verification
     const responseOK = await dialogResponse.textContent(); 
     console.log(">>>" + responseOK);
  
     console.log("===========================#Prodbug108#===========================");
})