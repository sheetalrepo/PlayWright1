const { test, expect } = require('@playwright/test');
const { log } = require('console');


/**
 * 
 * iFrame
 *   page.frameLocator()
 */

test('Test iFrame 1', async ({page}) =>{

     //Parent Page Locators
     const iFrameTitleParentPageElement = page.locator('text="IFrame"');
     const alignRightParentPageElement = page.locator("//button[@title='Align right']");

     //When
     await page.goto('https://practice.expandtesting.com/');
     await iFrameTitleParentPageElement.click();
     
     //Switch to iFrame
     const pageIFrameTinyMCEEditor = page.frameLocator("#mce_0_ifr");   // Child Page

     //iFrame Locators will come here (Child Page)
     const textAreaChildelement = pageIFrameTinyMCEEditor.locator("#tinymce");
     
     //await page.pause();
     await textAreaChildelement.clear();                // Child Page element
     await textAreaChildelement.fill("#Prod Bug 108 working inside iFrame");
     await alignRightParentPageElement.click();         // Parent Page element
     
     console.log("===========================#Prodbug108#===========================");
})


test('Test iFrame 2', async ({page}) =>{

     //Locators
     const iFrameTitle = page.locator('text="IFrame"');
     

     //When
     await page.goto('https://practice.expandtesting.com/');
     await iFrameTitle.click();

     //Switch to iFrame
     const pageIFrameEmailSubscribe = page.frameLocator("#email-subscribe");   // Child Page
     const emailChildElement = pageIFrameEmailSubscribe.locator("#email");
     const subscribeButtonChildElement = pageIFrameEmailSubscribe.locator("#btn-subscribe");
     const successMessageChildElement = pageIFrameEmailSubscribe.locator("#success-message");

     await emailChildElement.fill('abc@gmail.com');
     await subscribeButtonChildElement.click();

     //Verification
     const message = await successMessageChildElement.textContent();
     console.log("### Message: "+ message);
    
    
     console.log("===========================#Prodbug108#===========================");
})