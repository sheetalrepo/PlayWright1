const { test, expect } = require('@playwright/test');



/**
 * Webelement Handled
 *      - Dropdown
 *      - Radio Button
 *      - Checkboxes
 *      - Autocomplete
 *      - CSS with multiple Classes
 * 
 */




/**
 * Select Dropdown
 */
test('Test Select Dropdown', async ({page}) =>{

    //Locators
    const dropdownListTitle = page.locator('text="Dropdown List"');
    const simpleDropdown = page.locator('select#dropdown');
    const elementPerPage = page.locator('#elementsPerPageSelect');
    const country = page.locator("#country");

    //Login
    await page.goto('https://practice.expandtesting.com/');
    await dropdownListTitle.click();

    //await simpleDropdown.click();  //IMP: Never click Dropdown Webelemnt, directly use selectOptions()
    await simpleDropdown.selectOption('Option 2');
    await elementPerPage.selectOption('100');
    await country.selectOption('India');

    //Manual - Debugging | Run in headed mode
    await page.pause();
})





/**
 * Radio Buttons
 * 
 * expect toBeChecked      //assertions
 */
test('Test Radio Buttons', async ({page}) =>{
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
 * Disabled Radio Buttons & More
 * 
 * toBeDisabled()
 * nth element
 */
test('Test Disabled Radio Buttons', async ({page}) =>{
    //Locators
    const radioButtonTitle = page.locator('text="Radio Buttons"');
    const blackOption = page.locator('input#black');
    const footballOption = page.locator('#football');
    const redOption = page.locator('label.form-check-label');   // Return List of Radio Buttons
    const tennisOption = page.locator('label.form-check-label');   // Return List of Radio Buttons
    const greenOption = page.locator('input#green');

    //When
    await page.goto('https://practice.expandtesting.com/');
    await radioButtonTitle.click();
    await blackOption.click();
    await footballOption.click();
    await expect (greenOption).toBeDisabled();

    //Manual - Debugging
    await page.waitForTimeout(3000);
    await redOption.nth(1).click();        //Using nth
    await tennisOption.last().click();
    await page.pause();
})




/**
 * Checkboxes
 * 
 * 
 * toBeChecked()
 * toHaveAttribute()
 * 
 */
test('Test CheckBoxes', async ({page}) =>{
    //Locators
    const checkBoxesTitle = page.locator('text="Check Boxes"');
    const checkbox1 = page.locator('input#checkbox1');
    const checkbox2 = page.locator('input#checkbox2');
 
    //When
    await page.goto('https://practice.expandtesting.com/');
    await checkBoxesTitle.click();
    await checkbox2.click();    //Uncheck 2
    await page.waitForTimeout(1000);
    await checkbox1.click();   
    await page.waitForTimeout(1000);
    await checkbox2.click();


    //Verification
    await expect (checkbox1).toBeChecked();
    await expect (checkbox1).toHaveAttribute("type","checkbox");

    //Manual - Debugging
    await page.waitForTimeout(3000);
})



/**
 *   Autocomplete:
 *      - pressSequentially("text", delay_in_ms); //default is 0 ms
 *      - its different from fill()
 *      - pressSeq endter alphabet one by one with a bit pause    
 * 
 * https://playwright.dev/docs/api/class-locator#locator-press-sequentially
 */
test('Test Autocomplete', async ({page}) =>{
    //Locators
    const autocompleteTitle = page.locator('text="Autocomplete"');
    const countryOption = page.locator('input#country');
    const autoCompleteBlock = page.locator('div#countryautocomplete-list');
    const submitButton = page.locator('button:has-text("Submit")');
    const selectedCountryMessage = page.locator('p#result');

    //When
    await page.goto('https://practice.expandtesting.com/');
    await autocompleteTitle.click();
    await countryOption.pressSequentially("in",{ delay: 2000 });

    //Go to Auto complete block
    await autoCompleteBlock.waitFor();

    //Now search only inside block - locator chaining
    await autoCompleteBlock.locator('div').first().click();
    await submitButton.click();
    console.log("###"+ await selectedCountryMessage.textContent());
    await expect(selectedCountryMessage).toContainText('You selected: India'); 
    //await page.pause();
})



test('Test CSS with Multiple Classes Name', async ({page}) =>{
    //Locators
    const automationTraining1 = page.locator('[class="btn btn-sut d-lg-inline-block my-2 my-md-0 ms-md-3"]');   // Working
    const automationTraining2 = page.locator('[class="d-lg-inline-block"]');     // Will not Work 
    const automationTraining3 = page.locator('.d-lg-inline-block');     // Working 
    
    //When
    await page.goto('https://practice.expandtesting.com/');
    await automationTraining3.click(); 

    await page.pause();

})