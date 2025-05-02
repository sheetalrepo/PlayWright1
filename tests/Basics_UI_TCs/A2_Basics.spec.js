const { test, expect } = require('@playwright/test');




/**
 * Login Test w/o Await
 * 
 * will not work properly
 * 
 */
test('Test Login 0 without await', async ({page}) =>{
    page.goto('https://practice.expandtesting.com/');
    
    //Login
    page.locator('text="Test Login Page"').click();
    //page.pause();
    page.locator('input#username').fill('practice');     
    page.locator('#password').fill('SuperSecretPassword!');
    page.locator("[type='submit']").click();

    page.waitForTimeout(5000);
})



/**
 * Login Test & Assertion
 * 
 */
test('Test Login 1', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/');
    console.log("###Title: "+await page.title()); 
    await expect(page).toHaveTitle("Practice Test Automation WebSite");      
    
    //Login
    await page.locator('text="Test Login Page"').click();
    await page.locator('input#username').fill('practice');     
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator("[type='submit']").click();

    //Verification
    await page.locator('text="You logged into a secure area!"').isVisible();
    const text = await page.locator('text="You logged into a secure area!"').textContent(); // No wait required in Playwright (Auto wait)
    expect(page.locator('text="You logged into a secure area!"')).toContainText(text);  
    console.log("###Extracted Message: "+ text);
    await page.waitForTimeout(1000);
})



/**
 * Creating constants & Reuse Them
 * const & let can be used
 */
test('Test Login 2', async ({page}) =>{

    //Constants
    const testLoginPageTitle = page.locator('text="Test Login Page"');
    const username = page.locator('input#username');
    const password = page.locator('#password');
    let submitButton = page.locator("[type='submit']");
    let successMessage = page.locator('text="You logged into a secure area!"');

    //Login
    await page.goto('https://practice.expandtesting.com/');
    await testLoginPageTitle.click();
    await username.fill('practice');     
    await password.fill('SuperSecretPassword!');
    await submitButton.click();

    //Verification
    const text = await successMessage.textContent(); 
    expect(successMessage).toContainText(text);  
    await page.waitForTimeout(1000);
})




/**
 * How to fetch element in case of list
 *      - nth element
 *      - first element
 * 
 * Error: "strict mode violation"
 *          In case multiple element will be resolved
 * 
 * locator.waitFor();
 * locator.nth(3)
 */
test('Test nth element', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/');

    //Demo Error code
    //const allTitle = page.locator("[class='my-link stretched-link']")
    //const allTitleText = await allTitle.textContent(); 

    //Fetch Second Element
    const firstElement = page.locator("[class='my-link stretched-link']").first();
    firstElement.waitFor();    //For Demo Only
    const firstElementText = await firstElement.textContent(); 
    console.log("1 >>> " + firstElementText);

    //Fetch Second Element
    const secondElement = page.locator("[class='my-link stretched-link']").nth(1); 
    const secondElementText = await secondElement.textContent(); 
    console.log("2 >>> " + secondElementText);

    //Fetch 4th Element
    const fourthElementText = await page.locator("[class='my-link stretched-link']").nth(3).textContent(); 
    console.log("4 >>> " + fourthElementText);

    //Fetch Last Element
    const lastElementText = await page.locator("[class='my-link stretched-link']").last().textContent();  
    console.log("Last >>> " + lastElementText);
    console.log("===========================#Prodbug108#===========================");
})




/**
 * How to fetch all element text in case of list of elements
 *      - allTextContents
 *      - above method return an array of element []
 *      - playwright 'await' may not know how many element may be present in an array
 *      - array may be empty or partially filled sometimes in case page loads slow
 *      - to avoid such situation we can put a check on last element of array    
 * 
 * 
 * locator.first().waitFor();
 * locator.last().waitFor();
 * 
 */
test('Test First & Last Elements Wait', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/');

    const allTitlesLocator = page.locator("[class='my-link stretched-link']");    //List of elements

    //Multiple types of wait in case of LIST of Elements
    //await allTitlesLocator.waitFor();      //strict mode violation, it will only work for single element
    await allTitlesLocator.first().waitFor();
    await allTitlesLocator.last().waitFor();
    
    const allTitles = await allTitlesLocator.allTextContents();
    console.log(">>> " + allTitles);
    console.log("===========================#Prodbug108#===========================");
})







/**
 *  New Locator: hasText
 *      - await locator("tag:has-text('')")
 */
test('Test hasText Locator', async ({page}) =>{

    //Constants
    const testLoginPageTitle = page.locator("a:has-text('Test Login Page')");
    const username = page.locator('input#username');
    const password = page.locator('#password');
    //let submitButton = page.locator("[type='submit']");
    let submitButton = page.locator("button:has-text('Login')");
    let successMessage = page.locator('text="You logged into a secure area!"');

    //Login
    await page.goto('https://practice.expandtesting.com/');
    await testLoginPageTitle.click();
    await username.fill('practice');     
    await password.fill('SuperSecretPassword!');
    const bool = await submitButton.isVisible();
    expect(bool).toBeTruthy();
    await submitButton.click();

    //Verification
    const text = await successMessage.textContent(); 
    expect(successMessage).toContainText(text);  
    await page.waitForTimeout(1000);
    console.log("===========================#Prodbug108#===========================");
})


/**
 *  - getAttribute usage
 */
test('Test getAttribute', async ({page}) =>{

    //Constants

    const automationTraining = page.locator("a:has-text('Automation Training')");

    //Login
    await page.goto('https://practice.expandtesting.com/');
    const hrefLink = await automationTraining.getAttribute('href');
    console.log(">>> "+hrefLink);

    await page.goto(hrefLink);

    await page.waitForTimeout(5000);
    console.log("===========================#Prodbug108#===========================");
})