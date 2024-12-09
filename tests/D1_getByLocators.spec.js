const { test, expect } = require('@playwright/test');
const { log } = require('console');







/**
 * 
 * Style 1:
 *          page.locator().fill()
 *          page.locator().click()
 * 
 */
test('Test Radio Buttons Style 1 ', async ({page}) =>{

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
   await page.waitForTimeout(3000);
})





/**
 * getByLabel()  
 */
test('Test getByLabel ', async ({page}) =>{

   await page.goto('https://practice.expandtesting.com/');
   const radioButtonTitle = page.locator('text="Radio Buttons"');
   await radioButtonTitle.click();

   await page.pause();
   await page.locator('input#black').click();   //click on input tag
   await page.getByLabel("Red").click();        //click on label
   await page.getByLabel("Basketball").check();   // click & check same for radio button and checkboxes
   await page.getByLabel("Black").click();
   await page.getByLabel("Football").click();
   page.get
})


/**
 * getByPlaceholder()
 */
test('Test getByPlaceholder ', async ({page}) =>{

    //Locators
    const formValidationTitle = page.locator('text="Form Validation"');

    await page.goto('https://practice.expandtesting.com/');
    await page.pause();
    await formValidationTitle.click();
    await page.getByPlaceholder("012-3456789").fill('108-108-108');  
    await page.locator("input#validationCustom01").fill("Prod Bug 108");
   
 })



 /**
 *    getByText('')
 *    getByRole('role', {name: ''})
 *       - second argument is option, not required in case we have single element e.g. single button in whole page
 *       - button     <button> 
 *       - link       <href>
 *       - listitem   <li>
 */
test('Test getByRole', async ({page}) =>{

    //Constants
    const testLoginPageTitle = page.locator('text="Test Login Page"');
    const username = page.locator('input#username');
    const password = page.locator('#password');
    //let submitButton = page.locator("[type='submit']");
    //let successMessage = page.locator('text="You logged into a secure area!"');

    //Login
    await page.goto('https://practice.expandtesting.com/');
    await testLoginPageTitle.click();
    await username.fill('practice');     
    await password.fill('SuperSecretPassword!');
    await page.pause();
    await page.getByRole('button', {name:'Login'}).click();

    //Verification
    await page.getByText('You logged into a secure area!').isVisible();  
    await page.getByRole('link',{name: 'Home'}).click();

})



