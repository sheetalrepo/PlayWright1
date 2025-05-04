const { test, expect } = require('@playwright/test');






/**
 * Filters
 * Chaining Locators
 * 
 * 
 * npx playwright test F1_FiltersChaining.spec.js
 * npx playwright test --headed F1_FiltersChaining.spec.js
 * 
 */
test('Test Filters', async ({page}) =>{
   console.log("\n============================== Prod Bug 108: Filter chaining==============================")
   
   await page.goto('https://practice.expandtesting.com/');
   //Locators
   const mainCSS1 = page.locator('.col-md-12 > a');  //3 results
   const myLocator1 = await mainCSS1.filter({hasText: 'API Testing'}).textContent();
   console.log(">>>"+myLocator1);

   const mainCSS2 = page.locator('.col-md-12 > div > span');  // 6 results
   const myLocator2 = await mainCSS2.filter({hasText: 'Notes Rest Api'}).textContent();
   console.log(">>>"+myLocator2);
})



/**
 * Print 4 Titles of Top Row containing 4 blocks
 * 
 */
test('Test Filters for Loop', async ({page}) =>{
   console.log("\n============================== Prod Bug 108: First Row Only ==============================")
   //Locators
   const sampleApplicationsTopRowBlocks = page.locator('#examples > div').nth(0);

   //When
   await page.goto('https://practice.expandtesting.com/');
   
   for (let index = 0; index < 4; index++) {
      const text = await sampleApplicationsTopRowBlocks.locator("div.w-100").locator("h3.expand-card-title > a").nth(index).textContent();
      console.log(text);
   }
})



/**
 * 
 * Print All Rows
 */
test('Test Filters for Loop 2', async ({page}) =>{
   console.log("\n============================== Prod Bug 108: All Rows ==============================")
   
   await page.goto('https://practice.expandtesting.com/');

   const countOfRows = await page.locator('#examples > div').count();
   console.log("Total Count of Rows: "+countOfRows);

   for (let i = 0; i < countOfRows-1; i++) {

      //Locators
      const sampleApplicationsOneRow = page.locator('#examples > div').nth(i);
      
      for (let j = 0; j < 4; j++) {
         const text = await sampleApplicationsOneRow.locator("h3.expand-card-title > a").nth(j).textContent();
         console.log(i+ " ### ",text);
      }
   }
})