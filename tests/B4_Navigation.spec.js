const { test, expect } = require('@playwright/test');




/**
 * Navigation
 */
test('Test Navigation', async ({page}) =>{

    //Locators
    //const automationTrainingButton = page.locator('text="Automation Training"');
    const automationTrainingButton = page.locator("a:has-text('Automation Training')");
  
    //Go to page
    await page.goto('https://practice.expandtesting.com/');

    await automationTrainingButton.click();
    await page.waitForTimeout(5000);

    await page.goBack();
    await page.waitForTimeout(5000);  

    await page.goForward();
    await page.waitForTimeout(5000);  
})