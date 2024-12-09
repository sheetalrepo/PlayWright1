const { test, expect } = require('@playwright/test');

/**
 * Topics:
 *      - Inspector Features
 *      - Record & Play
 * 
 */






/**
 * To Start Inspector:
 *     npx playwright test --headed --debug
 * 
 *  - debug
 *  - get locators     
 * 
 */
test('Test Radio Buttons', async ({page}) =>{
    //Locators
    //const radioButtonTitle = page.locator('text="Radio Buttons"');
    const radioButtonTitle = page.getByRole('link', { name: 'Radio Buttons' });
    
    const blackOption = page.locator('input#black');
    const footballOption = page.locator('#football');

    //When
    await page.goto('https://practice.expandtesting.com/');
    await radioButtonTitle.click();
    await blackOption.click();
    await footballOption.click();
    await expect (blackOption).toBeChecked();

    //Manual - Debugging
    await page.waitForTimeout(3000);
})



/**
 * To Start Record & Play:
 *     npx playwright codegen https://practice.expandtesting.com/
 * 
 * 
 * Auto generated code
 * 
 */

test('Test Radio Buttons with Inspector', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Radio Buttons' }).click();
  await page.getByLabel('Black').check();
  await page.waitForTimeout(1000);
  await page.getByLabel('Football').check();
  await page.waitForTimeout(1000);
  await page.getByLabel('Red').check();
  await page.waitForTimeout(1000);
  await page.getByLabel('Basketball').check();
  await page.waitForTimeout(1000);
  await page.getByLabel('Yellow').check();
  await page.waitForTimeout(1000);
  await page.getByLabel('Tennis').check();
  await page.waitForTimeout(3000);
});