const { test, expect } = require('@playwright/test');
const { log } = require('console');


/**
 * 
 * 
 * #Parallel Run:
 *      - playwright.config.js:  workers: process.env.CI ? 1 : 5, 
 *      - In CI env = only 1 workers i.e. serial mode can also be configured
 *      - In Local, 5 worker at a time    
 *      - TC run in random order      
 * 
 * 
 * #Serial Run:
 *      - In case TCs sequesnce matters then we can use serial mode
 *      - All TCs will run in sequence
 *      - will override config file worker settings
 *      - In case some TC failed then rest TCs will be skipped
 * 
 * 
 * npx playwright test --headed I1_ParallelSerialRun.spec.js
 */

//test.describe.configure({mode:'parallel'});
test.describe.configure({mode:'serial'});
test('Test Login 1', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/');
    console.log("###Title: "+await page.title()); 
})


test('Test Login 2', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/');
    console.log("###Title: "+await page.title()); 
    //throw("Some Random Error");
})


test('Test Login 3', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/');
    console.log("###Title: "+await page.title()); 
})


test('Test Login 4', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/');
    console.log("###Title: "+await page.title()); 
})


test('Test Login 5', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/');
    console.log("###Title: "+await page.title()); 
})