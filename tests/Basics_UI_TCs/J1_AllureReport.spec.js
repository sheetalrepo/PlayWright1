const { test, expect } = require('@playwright/test');

/**
 * #Allure Report: 
 *      - Install Allure Report (refer readme.txt)
 *      - Run and confirm: allure --version
 *      - https://www.npmjs.com/package/allure-playwright
 *      - https://allurereport.org/docs/playwright/        
 * 
 * 
 * Run TCs (GitHub)
 *      npx playwright test J1_AllureReport.spec.js --grep "@smoke"  --reporter=line,allure-playwright
 * 
 * 
 * Generate Allure Report 
 *      allure generate ./allure-results --clean 
 * 
 * 
 * Open Allure Report
 *      allure open ./allure-report
 * 
 */


test('user can login 1', { tag: ['@smoke'] }, async ({ page }) => {
    console.log("###Title: 1"); 
});
 
test('user can login 2', { tag: ['@smoke'] }, async ({ page }) => {
    console.log("###Title: 2"); 
});

test('user can login 3', { tag: ['@reg' ] }, async ({ page }) => {
    console.log("###Title: 3"); 
});

test('user can login 4', { tag: ['@reg'] }, async ({ page }) => {
    console.log("###Title: 4"); 
});

test('user can login 5', { tag: ['@e2e'] }, async ({ page }) => {
    console.log("###Title: 5"); 
});

test('user can login 6', { tag:  ['@smoke', '@reg', '@e2e' ] }, async ({ page }) => {
    console.log("###Title: 6"); 
});

test('user can login 7', { tag:  ['@smoke', '@reg', '@e2e' ] }, async ({ page }) => {
    console.log("###Title: 7"); 
});
