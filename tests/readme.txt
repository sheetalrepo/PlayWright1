============================================================================================================
============================================================================================================
============================================================================================================
#Docs
============================================================================================================
https://playwright.dev/docs/test-assertions



#Adv:
1. Assertions are bydefault present in Playwright no need to import any other library like TestNG, Mocha etc 
2. Wait is auto handled, no need for explicit wait - Major Adv
3. CSS is preffered



============================================================================================================
============================================================================================================
#Installation
============================================================================================================
1. Download and Install
   - VS Code         https://code.visualstudio.com/download
   - node & npm      https://nodejs.org/en
       node -v
           v18.12.1
       npm -v
           9.6.7 
2. Create a folder 
3. Open VS Code > Terminal > Go to created folder 
4. Install Playwright. Refer https://playwright.dev/docs/intro
   npm init playwright@latest
5. Some useful VS Code extensions
   - Playwright Test for VSCode
   - Playwright Runner by Koushik


============================================================================================================
============================================================================================================
#How to run TCs
============================================================================================================
#UI TCs
Terminal > Go to Project Root Folder 
        playwright.config.js File > testDir=./tests  | Default locaitons of all TCs

npx playwrite test                                  //It will locate playwright.config.js and execute it in Headless mode
npx playwrite test --headed                         //To view browser execution  
npx playwright show-report                          //To show last run report
npx playwright test tests/A1_Basics.spec.js         //To run specific classes
npx playwrite test --headed --debug                 //To open Inspector for debugging 
npx playwrite test --ui                             //To open Test Runner UI

Note:
npx playwrite : It will locate playwrite module inside ProjectName > node_modules > playwright
playwright bydefaut run browser in Headless mode 

#Report
http://localhost:9323/




#API TCs 
    - Update TCs path  playwright.config.js File > testDir=./tests
    - Move to API TCs folder using terminal
    - npx playwrite test --headed
        
============================================================================================================
============================================================================================================
#Assertions
============================================================================================================

await expect(locator).toHaveTitle("my title");  
await expect(locator).toHaveText("my title");
await expect()
await expect(radioButtonLocator).toBeChecked();
await expect(radioButtonLocator).toBeDisabled();
await expect (locator).toHaveAttribute("type","checkbox");








============================================================================================================
============================================================================================================
#Debug  #Waits
============================================================================================================

#Logging
console.log(await page.title());                            //to print title
console.log("My Page Title: "+ await page.title());


#Debug
    await page.pause();


#Waits #Sleep 
    await page.waitForTimeout(5000);                    //wait sleep
    await locator.waitFor();                            //locator shd resolve to single element
    await locatorListItem.last().waitFor();             //locator returs a list 
    page.waitForLoadState('networkidle')                //load"|"domcontentloaded"





============================================================================================================
============================================================================================================
#Count  #Visible  #List  #Filter
#Chaining #Hierarchy #Child #Sibling elements
============================================================================================================
- locator.count()                                   // to count no. of element
        const rowCounts = await allRows.count();      

- locator.nth(0)   //Similar to xpath [0]   


#List of Elements Operations
- await locator.first().click()
- await locator.last().click()
- await locator.nth(3).click()


#Filter list of WebElement
filter(hasText)
        await page.locator("abc-locator").filter({hasText: 'abc'})
        await page.locator("").filter({hasText: 'abc'})
        await page.locator("").filter({hasText: 'abc'})
        await page.locator("").filter({hasText: 'abc'}).locator(".className").nth(1).click();


============================================================================================================
============================================================================================================
#WebElements  #checkbox #dropdown #radio
============================================================================================================

- await locator.selectOption('dropdownText')
- await radioButtonLocator.click();
- await checkboxLocator.click();








============================================================================================================
============================================================================================================
#Locators
============================================================================================================



===========================
#CSS Selectors: [V Imp]
===========================
    - tagname#idValue   or    #idValue
            input#username
            #username
    
    - tag:has-text('')              //Not CSS
    
    - tagname.classValue   or  .classValue
            page.locator(".my-link stretched-link")   || Will not work - single class name req
            Try page.locator('[class="A B C"]')       || Will Work e.g. B1
    
    - [attribute='value']
            let submitButton = page.locator("[type='submit']");
            [class='my-link stretched-link']
                        

    - [attribute*='partial_value']          
    
    - For traversing in DOM use parenttagname > childtagname  
            page.locator('div.table-responsive > table > tbody > tr')
            page.locator('#examples > div')
    
    ???
    text = ''
    .classValue childNode      | To traverse inside 



===========================
#Xpath
===========================
//input[@placeholder='Start date']
//button[@title='Bold']
(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]
(//table[@class='table-condensed']//td[@class='day'])[1]
//table[@class='table-condensed']/tbody/tr[3]/td[2]


In xpath we use [1] to fetch result based on count
locator.nth(0)

===========================
#Text Locators
===========================

- tag:has-text('')
        page.locator("button:has-text('Login')");                        

- locator.textContent()
        const text = await locator.textContent(); //to fetch text

- locator.nth(5).textContent();                 //To fetch text from a list

- locator.nth(5).innerText();         

- locator.nth(5).allInnerTexts();  

- locator.nth(5).allTextContents();  

- getByText('abc').isVisible();                     //To check if a text is Visible in page or not            

- locator.getAttribute('href')     //To fetch any value of an attribute


await locator.fill('23012024');
await locator.pressSequentially('23012024')



===========================
#getByLocators
===========================

- getByLabel('')               //checkbox, radio button
- getByPlaceholder('')
- getByText('').isVisible()
- getByRole('role', {name: ''})
        await page.getByRole('link',{name: 'Home'})
        await page.getByRole('button', {name:'Login'})
- getByRole('role')
        can be used in case one one element present in page     






============================================================================================================
============================================================================================================
#Error #Exceptions
============================================================================================================

Problem: [object Promise]
Sol: add await 




============================================================================================================
============================================================================================================
#Resources 
============================================================================================================
https://github.com/khoamle/PlaywrightTesting/blob/main/tests/example.spec.ts
https://practice.expandtesting.com/
https://qa-practice.netlify.app/auth_ecommerce
https://www.ministryoftesting.com/articles/websites-to-practice-testing

Config:
https://testingwithsk.in/playwright-testing-using-javascript-configuration/
https://www.cuketest.com/playwright/docs/test-configuration/




#Chrome Browser Plugins
https://selectorshub.com/selectorshub/       Chrome Plugin
ChroPath  Chrome Plugin