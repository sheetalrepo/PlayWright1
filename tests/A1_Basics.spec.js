//import statement for test and assertions(expect)
const { test, expect } = require('@playwright/test');


/**
 * test(param1, param2)
 * test('title of TC', funciton(){ })
 * 
 * 
 */
test('My First PlayWrite Test Case 1', function(){
    //all code comes here
})


/**
 * JS is Asynchronous
 * - JS runs each command in parallel
 * - In case we dont write 'await' in front of each statements then
 *       PlayWrite may click submit button before entering Usernam/Password
 * - await ask JS to wait for previous command to run properly before running next command  
 * - async need to mention before function()
 * - await and async comes together
 * 
 */
//test("title1","body")
//test("title2","function as body")

test('My First PlayWrite Test Case 2', async function(){
    //await open browser
    //await enter username password
    //await submit button
})


/**
 * Anonymous Function
 *  - No need to write function name etc
 *  - Replace 'function()' with '=>' 
 * 
 */
test('My First PlayWrite Test Case 3', async =>{
    //await
})


/**
 * Fixtures : Fixtures are simply Global Variables
 *      - fixtures need to come inside {}
 *      - {browser} : which browser to run
 *      - w/o {} it will be treated as normal string
 * 
 * newContext()
 *      - Kind of incognito w/o any cookies etc, fresh page
 * 
 * newPage()
 *      - New Page need to be created before launching any website
 *      - page can be think like a single tab in a browser
 */

//test('My First PlayWrite Test Case 4', async function({browser}){
test('My First PlayWrite Test Case 4', async ({browser}) =>{
    //To initialize new page
    const context = await browser.newContext();
    const page = await context.newPage();

    //driver.get("url")
    await page.goto('https://www.youtube.com/c/sheetalsingh23/videos');
    console.log(await page.title());
})


/**
 * Fixtures: 
 *      - {page}:  page is another fixture similar to browser
 *      - {page} = newContext() + newPage()
 *      - No need to pass browser now
 *      - directly pass {page}
 * 
 */
test('My First PlayWrite Test Case 5', async ({page}) =>{

    //No need to write above two lines
    await page.goto('https://playwright.dev/');
    console.log(await page.title());
})





/**
 * test.only
 *      - test.only will execute only 1 TC out of all the 1000s of TCs
 *      - For debuging purpose only    
 *      - multiple 'only' allowed      
 * 
 * assertion
 *      - toHaveTitle
 * 
 * timeout
 *      - waitForTimeout
 *  
 */
test('My First PlayWrite Test Case 6', async ({page}) =>{
    await page.goto('https://playwright.dev/');
    console.log(await page.title());  // title()
    console.log(await page.title); //not work
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");      //Dont forget await
    await page.waitForTimeout(5000);
})