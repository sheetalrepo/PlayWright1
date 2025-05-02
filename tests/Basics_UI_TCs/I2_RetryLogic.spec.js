const { test, expect } = require('@playwright/test');
//const { log } = require('console');


/**
 * #Retry Logic:
 *      - In case TC fail Playwright can handle retry
 *      - retries: process.env.CI ? 2 : 3
 *      - On Local: 3 times retry
 * 
 * 
 * npx playwright test --headed I2_RetryLogic.spec.js
 */

test('Test Basic', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/');
    console.log("###Title: "+await page.title()); 
})


test('Test Retry Logic', async ({page}) =>{
    await page.goto('https://www.youtube.com/c/sheetalsingh23/videos');
    console.log("###Title: "+await page.title()); 
    throw("Some Random Error");
})

