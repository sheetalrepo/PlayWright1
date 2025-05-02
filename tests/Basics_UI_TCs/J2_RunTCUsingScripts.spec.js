const { test, expect } = require('@playwright/test');

/**
 * 
 * #Default Command to Run TCs:
 * npx playwright test J2_RunTCUsingScripts.spec.js
 *      - headless
 *      - points to default playwright.config.js file
 * 
 * #Command to use diff config and diff projects
 * npx playwright test  --headed  .\J2_RunTCUsingScripts.spec.js --config playwright.config2.js --project=my_chrome_config
 *     
 * #Run as per tags
 * npx playwright test --headed J2_RunTCUsingScripts.spec.js --grep "@smoke"
 * 
 * 
 * #Multiple Option to run and so much configuration
 *  - Use package.json rather playwright.config.js
 *  - add all run config inside package.json > scripts
 *           "scripts": {
                    "basic_tests": "npx playwright test J2_RunTCUsingScripts.spec.js",
                    "chrome_tests": "npx playwright test  --headed J2_RunTCUsingScripts.spec.js --config playwright.config2.js --project=my_chrome_config",
                    "smoke_tests": "npx playwright test --headed J2_RunTCUsingScripts.spec.js --grep \"@smoke\""
            }
 *  - npm run basic_tests
 *    npm run chrome_tests
 *    npm run smoke_tests       
 * 
 * 
 * 
 */


test('user can login 1', { tag: ['@smoke'] }, async ({ page }) => {
    console.log("###Title: 1"); 
    await page.goto('https://practice.expandtesting.com/');
});
 
test('user can login 2', { tag: ['@smoke'] }, async ({ page }) => {
    console.log("###Title: 2"); 
    await page.goto('https://www.google.com/');
});

test('user can login 3', { tag: ['@reg' ] }, async ({ page }) => {
    console.log("###Title: 3"); 
    await page.goto('https://es.search.yahoo.com/');
});

test('user can login 4', { tag: ['@reg'] }, async ({ page }) => {
    console.log("###Title: 4"); 
    await page.goto('https://www.youtube.com/c/sheetalsingh23/videos');
    
});

test('user can login 5', { tag: ['@e2e'] }, async ({ page }) => {
    console.log("###Title: 5"); 
    await page.goto('https://es.wikipedia.org/wiki/Wiki');
    
});
