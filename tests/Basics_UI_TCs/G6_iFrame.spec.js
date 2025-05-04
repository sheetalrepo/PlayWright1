const { test, expect } = require('@playwright/test');
const { log } = require('console');


/**
 * 
 * iFrame
 *   page.frameLocator()
 * 
 * 
 * npx playwright test --headed G6_iFrame.spec.js
 */

test('Test iFrame 1', async ({page}) =>{

     //Parent Page
     const iFrameTitleParentPageElement = page.locator('text="IFrame"');
     await page.goto('https://practice.expandtesting.com/');
     await iFrameTitleParentPageElement.click();
    
     //Switch to iFrame
     const pageIFrameTinyMCEEditor = page.frameLocator("#mce_0_ifr");   
     const textAreaChildelement = pageIFrameTinyMCEEditor.locator("#tinymce");
     await textAreaChildelement.clear();               
     await textAreaChildelement.fill("@Prod Bug 108 working inside iFrame");

     await page.pause();
     console.log("===========================#Prodbug108#===========================");
})


test('Test iFrame 2', async ({page}) =>{

     //Parent Page
     const iFrameTitle = page.locator('text="IFrame"');
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
    
     await page.pause();
     console.log("===========================#Prodbug108#===========================");
})