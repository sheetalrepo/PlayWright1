const { test, expect } = require('@playwright/test');



/**
 * Tables:
 *      - count()
 *      - chaining locators
 * 
 */
test('Test Elements in Big Tables', async ({page}) =>{

    //Locators
    const largeDeepDOMTitle = page.locator('text="Large & Deep DOM"');
    const allRows = page.locator('div.table-responsive > table > tbody > tr');
    const h4Heading = page.locator('h4');
    
    //Go to page
    await page.goto('https://practice.expandtesting.com/');
    await largeDeepDOMTitle.click();

    //Try to run with and without this code

    //Option 1:       
    //const lastH4OnPage = await h4Heading.nth(3).textContent();
    //console.log("### Text:"+ lastH4OnPage);

    //Option 2:
    await h4Heading.last().waitFor();

    //Row Count - Imp Cmd
    const rowCounts = await allRows.count();
    console.log("###(50): "+rowCounts);


    for (let i = 1; i < rowCounts; i++) {

        //[object Promise] w/o using await
        const cellText1 = await allRows.nth(i).locator('td').nth(6).textContent();    //IMP: .locator('td') visibility is inside allRows(i) only    
        //const cellText2 = await allRows.nth(i).locator('td').nth(7).innerText();     
        //const cellText3 = await allRows.nth(i).locator('td').nth(8).allInnerTexts();
        //const cellText4 = await allRows.nth(i).locator('td').nth(9).allTextContents(); 


        console.log("### "+cellText1);
        //console.log("### "+cellText2);
        //console.log("### "+cellText3);
        //console.log("### "+cellText4);

        //break;
    }

    console.log("-------FINISH--------");

    //Manual - Debugging | Run in headed mode
    //await page.pause();
})

