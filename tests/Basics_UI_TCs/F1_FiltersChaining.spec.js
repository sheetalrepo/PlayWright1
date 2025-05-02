const { test, expect } = require('@playwright/test');
const { log } = require('console');






/**
 * Filters
 * Chaining Locators
 * 
 */
test('Test Filters', async ({page}) =>{
   //Locators
   const sampleAplicationsBlocks = page.locator('#examples > div');

   //When
   await page.goto('https://practice.expandtesting.com/');
   const sampleAplicationsBlocksCount = await sampleAplicationsBlocks.count();
   console.log(">>>"+sampleAplicationsBlocksCount);
   console.log("===========================#Prodbug108#===========================");

   const radiobuttonBlock = await sampleAplicationsBlocks.filter({hasText: 'Radio Buttons'}).textContent();
   console.log(">>>"+radiobuttonBlock);
   console.log("===========================#Prodbug108#===========================");

   const blockTitle = await sampleAplicationsBlocks.filter({hasText: 'Radio Buttons'}).locator(".stretched-link").nth(1).textContent();
   console.log(">>>"+blockTitle);
   console.log("===========================#Prodbug108#===========================");

   await sampleAplicationsBlocks.filter({hasText: 'Radio Buttons'}).locator(".stretched-link").nth(1).click();

   await page.pause();
})



/**
 * Print Single Row
 */
test('Test Filters for Loop', async ({page}) =>{
   //Locators
   const sampleAplicationsTopRowBlocks = page.locator('#examples > div').nth(0);

   //When
   await page.goto('https://practice.expandtesting.com/');
   
   for (let index = 0; index < 4; index++) {
      const text = await sampleAplicationsTopRowBlocks.locator(".stretched-link").nth(index).textContent();
      console.log(">>>"+text);
   }

   console.log("===========================#Prodbug108#===========================");
})



/**
 * 
 * Print All Rows
 */
test('Test Filters for Loop 2', async ({page}) =>{
   await page.goto('https://practice.expandtesting.com/');

   const countOfRows = await page.locator('#examples > div').count();
   console.log(">>>"+countOfRows);

   for (let i = 0; i < countOfRows; i++) {

      //Locators
      const sampleAplicationsOneRow = page.locator('#examples > div').nth(i);
      
      for (let j = 0; j < 4; j++) {
      
         const text = await sampleAplicationsOneRow.locator(".stretched-link").nth(j).textContent();
         console.log(">>>"+text);
      }

      console.log("===========================#Prodbug108#===========================");
   }


   console.log("===========================#Prodbug108#===========================");
})