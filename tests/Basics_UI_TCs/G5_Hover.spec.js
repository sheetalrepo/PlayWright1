const { test, expect } = require('@playwright/test');
const { log } = require('console');


/**
 * 
 * locator.hover()
 * 
 */

test('Test Hover User 1', async ({page}) =>{

     //Locators
     const hoverTitle = page.locator('text="Hovers"');
     const user1 = page.locator("[src='/img/avatar-blank.jpg']");
     const viewProfileLink = page.locator("a:has-text('View profile')");
     const welcomeMessageTag = page.locator("//h2");


     //When
     await page.goto('https://practice.expandtesting.com/');
     await hoverTitle.click();
     
     //await page.pause();
     await user1.nth(0).hover();
     await viewProfileLink.nth(0).click();
  

     //Verification
     const welcomeMessage = await welcomeMessageTag.textContent();
     console.log("### Message: "+ welcomeMessage);

     console.log("===========================#Prodbug108#===========================");
})


test('Test Hover User 3', async ({page}) =>{

     //Locators
     const hoverTitle = page.locator('text="Hovers"');
     const user1 = page.locator("[src='/img/avatar-blank.jpg']");
     const viewProfileLink = page.locator("a:has-text('View profile')");
     const welcomeMessageTag = page.locator("//h2");


     //When
     await page.goto('https://practice.expandtesting.com/');
     await hoverTitle.click();
     
     //await page.pause();
     await user1.nth(2).hover();
     await viewProfileLink.nth(2).click();
  

     //Verification
     const welcomeMessage = await welcomeMessageTag.textContent();
     console.log("### Message: "+ welcomeMessage);

     console.log("===========================#Prodbug108#===========================");
})