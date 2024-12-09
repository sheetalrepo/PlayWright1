const { test, expect } = require('@playwright/test');

/**
 * Topics:
 *      - Screenshot & Traces
 *        
 */






/**
 *  Config file
 *      - trace: retain-on-failure
 *          - 'on': Not required, uses lots of memory, space etc
 *          - 'retain-on-failure': Good option to use
 *          - 'on-first-retry': Good option to use              
 *      - screenshot: 'on', 
 *  
 *  Trace.zip
 *      - Download trace.zip from generated report
 *          - Report path http://localhost:9323/
 *          - npx playwright show-report          :in case report is not active
 *          - /playwright-report/index.html       :in case report is not active
 *      - Download from /test-results folder
 * 
 *  How to use Trace.zip 
 *      - Go to https://trace.playwright.dev/ and upoad traces.zip
 *  
 */
test('Debug TC using Traces & Screenshots', async ({page}) =>{
    //Locators
    const radioButtonTitle = page.locator('text="Radio Buttons"');
    const blackOption = page.locator('input#black');
    const footballOption = page.locator('#football');

    //When
    await page.goto('https://practice.expandtesting.com/');
    await radioButtonTitle.click();
    await blackOption.click();
    await footballOption.click();
    await expect (blackOption).toBeChecked();

    //Manual - Debugging
    //await page.waitForTimeout(3000);
})

