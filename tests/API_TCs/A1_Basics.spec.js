const { test, expect } = require('@playwright/test');



test('My First PlayWrite Test Case 5', async ({page}) =>{

    await page.goto('https://playwright.dev/');
    console.log(await page.title());
})



/**
 * Navigation
 */
test.only('Test API Tests', async ({page}) =>{

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