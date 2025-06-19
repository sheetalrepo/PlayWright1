const { test, expect } = require('@playwright/test');
const POManager = require('../Pages/POManager.js');
const testData =  JSON.parse(JSON.stringify(require("../TestData/test_data.json")));



console.log("\n============================== Prod Bug 108: Home Page Tags ==============================")


/**
 * Testing Tagging
 *      npx playwright test --headed TestHomePageTags.spec.js --grep "@sanity"
 */

test('Sample Home Page Case 1', { tag: '@sanity' }, async ({ page }) => {
    console.log("###Sample Home Page 1: Sanity Case"); 
    await page.goto('https://practice.expandtesting.com/');
});

test('Sample Home Page Case 2', { tag: '@reg_tc'}, async ({ page }) => {    
    console.log("###Sample Home Page 2: Reg Case"); 
    await page.goto('https://www.youtube.com/@prodbug108');
});

test('Sample Home Page Case 3', { tag: ['@reg_tc', '@sanity'] }, async ({ page }) => {
    console.log("###Sample Home Page 3: Reg AND Sanity Case"); 
    await page.goto('https://www.yahoo.com');
});