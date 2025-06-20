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


#Upgrade/Downgrade Playwright
npx playwright --version                    | to display current version e.g. 1.47.2
npm show @playwright/test versions          | all available versions

npm install @playwright/test@1.52.0         | to install specific versions 
npx playwright install                      | to install new browsers compatible with new playwright versions    

#Error After installation:
Looks like Playwright Test or Playwright was just installed or updated. 
Please run the following command to download new browsers:              
        npx playwright install                       | 



#Allure Report Installation
1)npm install --save-dev @playwright/test allure-playwright
        refer: node_modules: allure package visible 

2)allure --version
Error: allure : The term 'allure' is not recognized
        

3) In case of error, install allure globally
        npm install -g allure-commandline
        npx allure generate ./allure-results --clean
        npm install -g allure-commandline                       | reinstall 
        where allure                    | if no result path is not correct
        npm list -g --depth=0
                find allure path: C:\Users\xxx\AppData\Roaming\npm\allure-commandline@2.34.0
        npx allure-commandline --version            | 2.34.0
        
        Add following to Window Env 'Path' variables
                "C:\Users\xxx\AppData\Roaming\npm\node_modules\allure-commandline\bin"

        #Reinstallation:
        npm uninstall -g allure-commandline
        npm install -g allure-commandline

        Note:
                1. Always open a new terminal after some changes  
                2. Try Git Bash in case VScode not working

4) Run the TCs with Reporter as Allure
npx playwright test I2_TaggingTC.spec.js --grep "@smoke"  --reporter=line,allure-playwright
    line= text format report, allure read line report and generate its own 
    allure-results folder created 

5) Generate Allure Report 
allure generate ./allure-results --clean 

6) Open Allure Report
allure open ./allure-report



============================================================================================================
============================================================================================================
#How to run TCs
============================================================================================================
#UI TCs
Terminal > Go to Project Root Folder 
    playwright.config.js File > testDir=./tests  | Default locaitons of all TCs

npx playwright test                                  //Headless + 1 Test Case (test.only)
npx playwright test --headed                         //Browser  + 1 Test Case (test.only)
npx playwright test --headed A1_Basics.spec.js       //Browser  + 1 Class
npx playwright test A1_Basics.spec.js                //Headless + 1 Class
npx playwright test A1_Basics.spec.js                //1 Class + Path: playwright.config.js >> testDir = ./tests
npx playwright show-report                           //To show last run Test Report

npx playwright test --headed --debug                 //To open Inspector for debugging 

npx playwright test --ui                                       //To open Test Runner UI + Headless Model
npx playwright test --headed --ui tests/A1_Basics.spec.js      //To open Test Runner UI + Browser Mode


#To run with different Configuration | default = playwright.config.js
Note: in case of mult project, same test case will run on mult config i.e. mult browsers
npx playwright test  --headed  .\abc.spec.js --config playwright.config2.js

#Add mult project config inside main config
npx playwright test  --headed  .\TestLoginPageNew.spec.js --config playwright.config2.js --project=my_firefox_config


Note:
npx playwright : It will locate playwrite module inside ProjectName > node_modules > playwright
playwright bydefaut run browser in Headless mode 

#Report 
http://localhost:9323/


#Run via package.json | short way
npm run basic_tests
npm run chrome_tests
npm run smoke_tests  



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

#Debug UI 
    await page.pause();                         //debug window will open 
    npx playwrite test --headed --debug         //debug window will open from start  of test

#Debug traces.zip
    playwright.config.js > trace: 'retain-on-failure'
    Run test >  Goto Project Folder > test-results > traces.zip  
    Goto https://trace.playwright.dev/  > upload trace.zip file 

#Debug API 
    playwright.config.js > trace: 'on'
    z_readme.txt

#Logging
    console.log(await page.title());                            //to print title
    console.log("My Page Title: "+ await page.title());

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
#Export #Import #require
============================================================================================================

#Refer: Adv_UI_POM > TestLoginPage
module.exports = LoginPage;                             //Imp No curly braces with exporting class 
const { test, expect } = require('@playwright/test');
const LoginPage = require('./LoginPage.js');            //Imp No curly braces with importing Class 
    const loginPage = new LoginPage(page);


#Refer: Basics_API_TCs > API_30_Logging
module.exports = { logRequest };                            //curly braces with exporting a function
const { logRequest } = require('./Util_Logger.js');         //curly braces with importing function



============================================================================================================
============================================================================================================
#Error #Exceptions
============================================================================================================

Q: [object Promise]
Sol: add await 


Q: apiRequestContext.get: unable to get local issuer certificate


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

