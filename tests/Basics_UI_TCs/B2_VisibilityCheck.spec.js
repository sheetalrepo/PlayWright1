const { test, expect } = require('@playwright/test');


/**
 * Visibility check
 *      - count()
 * 
 * 
 * npx playwright test B2_VisibilityCheck.spec.js  
 * npx playwright test --headed tests/UI_TCs_Practice/B2_VisibilityCheck.spec.js
 *                
 */
test('Test Visibility Check using Count', async ({page}) =>{

    //Locators
    const largeDeepDOMTitle = page.locator('text="Large & Deep DOM"');
    //const largeDeepDOMTitle = page.locator('text="Random Text"');

    //Go to page
    await page.goto('https://practice.expandtesting.com/');

    //Count Check
    if(await largeDeepDOMTitle.count() >= 1){
        console.log(">>> VISIBLE");
    }else{
        console.log(">>> NOT VISIBLE");
    }

})





/**
 * Visibility check
 *      - count()
 *      - isVisible() | returns boolean
 */
test('Test Visibility Check using isVisible', async ({page}) =>{

    //Locators
    const largeDeepDOMTitle = page.locator('text="Large & Deep DOM"');
    //const largeDeepDOMTitle = page.locator('text="Random Text"');

    //Go to page
    await page.goto('https://practice.expandtesting.com/');

    //isVisible Check
    const bool = await largeDeepDOMTitle.isVisible();
    if(bool){
        console.log(">>> VISIBLE");
    }else{
        console.log(">>> NOT VISIBLE");
    }
    await expect(bool).toBeTruthy();
    await expect(largeDeepDOMTitle).toBeVisible();
})

