const { test, expect } = require('@playwright/test');
const { log } = require('console');





/**
 * Calender Automation
 * 
 */
test('Test Calendar 1', async ({page}) =>{
     //Locators
     const formValidation = page.locator('text="Form Validation"');
     const contactName = page.locator('input#validationCustom01');
     const calendar = page.locator('input#validationCustom05').nth(1);
     const contactNumber = page.locator('input#validationCustom05').nth(0);
     const paymentMethod = page.locator('select#validationCustom04');
     const registerButton = page.locator("[type='submit']");
     const successMsg = page.locator("p:has-text('Thank you for validating your ticket')");


     //When
     await page.goto('https://practice.expandtesting.com/');
     await formValidation.click();

     contactName.fill("Prod ");

     await calendar.click();
     //await calendar.fill('23012024');   //Working
     await calendar.pressSequentially('23012024')
     
     await contactNumber.fill('123-4567890');
     
     //await paymentMethod.click();  //IMP: Never click Dropdown Webelemnt
     await paymentMethod.selectOption('card');
     
     await contactName.press('ArrowRight'); 
     await contactName.press('ArrowRight'); 
     await contactName.press('ArrowRight'); 
     await contactName.press('ArrowRight'); 
     await contactName.press('ArrowRight'); 
     await contactName.pressSequentially('Bug');

     await page.pause();
     await registerButton.click();
     await successMsg.isVisible();

     //await page.pause();
     console.log("===========================#Prodbug108#===========================");
})



test("Test Calendar 2", async ({ page }) => {
     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
     let date = "1994-12-04"
 
     await page.fill("id=birthday", date);
     await page.waitForTimeout(3000)
 })


 
 test("Test Calendar 3", async ({ page }) => {
     //Locators
     const startDate = page.locator("//input[@placeholder='Start date']");
     const endDate = page.locator("//input[@placeholder='End date']");
     const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
     const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
     const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");
     
     //Date to Select (different)
     const day1 = page.locator("(//table[@class='table-condensed']//td[@class='day'])[1]");
     const day2 = page.locator("//table[@class='table-condensed']/tbody/tr[3]/td[2]");    
     let monthToSelect = "December 2025"; //variable
     
     //When
     await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
     //await page.click("//input[@placeholder='Start date']");
     await startDate.click();


     //Fetch Current Month
     let currentMonth = await mmYY.textContent();
     console.log("Current Month: " + currentMonth); 
 
     //Keep clicking 'Next' till you reach required Month
     while(monthToSelect != currentMonth){
          await next.click();
          currentMonth = await mmYY.textContent();
          console.log(">> New Current Month: " + currentMonth);
     }
     console.log("#Reached Requred Month:"+ monthToSelect);

     //Select Day of the Month
     await day1.click(); 

     //End Date Logic - Similar to previous code
     await endDate.click();  
     
     await page.waitForTimeout(10000)
 })

