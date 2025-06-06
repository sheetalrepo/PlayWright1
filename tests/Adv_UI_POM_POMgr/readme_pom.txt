OM
============================================================================================================
============================================================================================================
#Playwright Page Object Model (POM)
with @prodbug108
https://www.youtube.com/c/sheetalsingh23/videos
https://www.youtube.com/@prodbug108
============================================================================================================

#FW Features:
1. POM Implementation
2. Parallel Running
3. Reading Data from JSON files
4. Passing params via cmd like base url 
5. Run in headed or headless via cmd
6. Run via cmd, diff config for each env 
7. Run via different Tags
8. Multiple browser support 
9. Viewport settings for diff screen sizes like Mobile Screens etc
10. Copy Prompt feature(v1.51+) to take help of AI LLMs


#POM Framwork Layers:
🔹 Presentation Layer
The Presentation Layer refers to how test execution results and interaction with test automation are displayed. In Playwright, this can include:
UI Assertions & Validations – Ensuring UI elements are correctly displayed and functional.
Debugging & Tracing – Utilizing Playwright Debug Mode, Screenshots, and Trace Viewer for better visibility.
HTML Reports & Logging – Capturing execution results in readable formats like Allure Reports, HTML Reports, or Playwright’s default reporting.

🔹 Business Layer
Each Page has a dedicated Page Class for maintaining elements & actions.
POManager manages all Page Objects for easy access.
Test Cases (TCs) call POManager to retrieve necessary page objects.
Uses Playwright version 1.51+ for improved POM support.

🔹 Test Layer
Dedicated Test Files per page, ensuring modularity.
Parallel Test Execution using Playwright workers, optimizing execution time.

🔹 Data Layer
External JSON for Test Data to avoid hardcoding values in test scripts.
Each test case has dynamic access to its own JSON data.
Easy modifications allow scalability and adaptability for complex data structures.

🔹 Reporting Layer
Playwright Reporting via built-in HTML Reports, Tracing, Screenshots, etc.
Integration with external reporting tools like Allure or Extent Reports for detailed analysis.



============================================================================================================
============================================================================================================
#How to run cases:
============================================================================================================

#Basic Commands:
npx playwright test TestLoginPageNew.spec.js                    | Headless Mode 
npx playwright test --headed TestLoginPageNew.spec.js           | Headed Mode
npx playwright test  --headed  .\TestLoginPageNew.spec.js


#Run Tag Wise 
https://playwright.dev/docs/test-annotations
npx playwright test --headed TestLoginPageNew.spec.js --grep "@sanity"      | One Class One Tag
npx playwright test --grep "@sanity"                                        | All Class One Tag

npx playwright test --headed TestLoginPageNew.spec.js --grep-invert "@sanity"      | Run all TC including w/o Tag TCs except @sanity 

npx playwright test --headed TestLoginPageNew.spec.js --grep --% "@sanity^|@reg"        | Logical OR
npx playwright test --headed TestLoginPageNew.spec.js --grep "(?=.*@sanity)(?=.*@reg)"  | Logical AND


#Run as per Config files
npx playwright test  --headed TestLoginPageNew.spec.js --grep "@reg_tc" --config playwright.config2.js --project=my_chrome_config
npx playwright test  --headed --grep "@reg_tc" --config playwright.config2.js --project=my_chrome_config


#Run via NPM cmd 
1. Update scrpts in package.json > script section
    "scripts": {
            "chrome_tests": "npx playwright test  --headed TestLoginPageNew.spec.js --grep \"@reg_tc\" --config playwright.config2.js --project=my_chrome_config"
    }
2. npm run chrome_tests


#Pass Base URL via cmd line
Using Git Bash Terminal 
BASE_URL=https://practice.expandtesting.com/ npx playwright test --headed TestLoginPageNew.spec.js --grep "@cmd"
BASE_URL=https://qa.practice.expandtesting.com/ npx playwright test --headed TestLoginPageNew.spec.js --grep "@cmd"
npx playwright test --headed TestLoginPageNew.spec.js --grep "@cmd"             //Default = Prod URL

============================================================================================================
============================================================================================================
#Others:
============================================================================================================



