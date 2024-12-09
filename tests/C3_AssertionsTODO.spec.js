const { test, expect } = require('@playwright/test');

/**
 * Assertions:
 *      - Title Check
 *      - Visibility Check
 * 
 */
test('Test Assertions', async ({page}) =>{

    //Locators
    const largeDeepDOMTitle = page.locator('text="Large & Deep DOM"');
    //const largeDeepDOMTitle = page.locator('text="Random Text"');

    //Go to page
    await page.goto('https://practice.expandtesting.com/');
    await expect(page).toHaveTitle("Practice Test Automation WebSite");  

    //Assert on Visibility
    const bool = await largeDeepDOMTitle.isVisible();
    expect(bool).toBeTruthy();

    //Assert on Text
    await expect(largeDeepDOMTitle).toContainText('Large & Deep DOM');  
    await expect(largeDeepDOMTitle).toHaveText('Large & Deep DOM');  
    await expect(largeDeepDOMTitle).toBeVisible();

})