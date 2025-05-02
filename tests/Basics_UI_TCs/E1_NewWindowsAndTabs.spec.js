const { test, expect } = require('@playwright/test');


/**
 * Webelement Handled
 *      - New Tab Handling
 * 
 */


//Refer A1_Basics.spec > TC4
test('Test Single Tab', async function({browser}){
        //To initialize new page
        const context = await browser.newContext();       
        const page = await context.newPage();             // page = Single TAB
    
        //driver.get("url")
        await page.goto('https://practice.expandtesting.com/');
        console.log(await page.title());
})
    

test('Test Multiple Tab', async function({browser}){
    //To initialize New Page (Tab)
    const context = await browser.newContext();       
    const page = await context.newPage();             // page = Single TAB

    //Locators - Parent Page
    const multipleWindowsTitleInParentPage = page.locator('text="Multiple Windows"');
    const clickHereLinkInParentPage = page.locator('div.row > a');
    const homeLinkInParentPage = page.locator('text="Home"');
    const searchBoxInParentPage = page.locator('input#search-input');
    

    //When - Action
    await page.goto('https://practice.expandtesting.com/');
    console.log("### Parent Page Title: " + await page.title());
    await multipleWindowsTitleInParentPage.click();
    await page.waitForTimeout(5000); //For Demo Only
    
    /**
     * Very Imp Concept: newPage 
     *      - Playwright will start listening for a probable new page event
     *      - We cannot use await inside Promise.all block
     *      - We need async operation here to be executed
     *      - In case we use await then Playwright will wait for 'waitForEvent' to complete and control will not move to next line
     *      - 'waitForEvent' will never complete becasue we are using click in next line
     * 
     * 
     */
    const [newPage] = await Promise.all(
        [    
            context.waitForEvent('page'),             //No await
            clickHereLinkInParentPage.click(),        //No await
        ]    
    )


    //Locators - Child Page      
    const childPageH1Locator = newPage.locator('h1');
    
    //When
    const childPageText = await childPageH1Locator.textContent();
    console.log("###Child Page Title: " + await newPage.title());
    console.log("###Child Page Text: " + childPageText);
    
    //await page.pause();

    //Parent Page Operations can be resumed   
    homeLinkInParentPage.click();
    searchBoxInParentPage.fill("Prod Bug 108");
    await page.pause();
})