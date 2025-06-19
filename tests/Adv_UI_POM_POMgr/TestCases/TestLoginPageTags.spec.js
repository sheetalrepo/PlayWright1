const { test, expect } = require('@playwright/test');
console.log("\n============================== Prod Bug 108: Login Page Tags ==============================")


/**
 * Testing Tagging
 *      npx playwright test --headed TestLoginPageTags.spec.js --grep "@sanity" 
 *  
 */

test('Sample Login 1', { tag: '@sanity'}, async ({ page }) => {
    console.log("###Sample Login 1: Sanity Case"); 
    await page.goto('https://practice.expandtesting.com/');
});


test('Sample Login 2', { tag: '@reg_tc'}, async ({ page }) => {
    console.log("###Sample Login 2: Reg Case"); 
    await page.goto('https://www.google.com/');
});


test('Sample Login 3', { tag: ['@reg_tc', '@sanity'] }, async ({ page }) => {
    console.log("###Sample Login 3: Reg && Sanity Case"); 
    await page.goto('https://www.youtube.com/@prodbug108');
});


test('Sample Login 4', { tag: '@sanity'}, async ({ page }) => {
    console.log("###Sample Login 4: Sanity Case"); 
    await page.goto('https://www.yahoo.com/');
});


//Another Type of Tagging
test('Sample Login 5 @sanity', async ({ page }) => {
    console.log("###Sample Login 5: Sanity Case"); 
    await page.goto('https://www.google.com/');
});