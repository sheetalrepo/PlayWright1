const { test, expect } = require('@playwright/test');

/**
 * #Tagging: 
 * npx playwright test I2_TaggingTC.spec.js --grep "@smoke"                     | All TCs containing tag     
 * npx playwright test I2_TaggingTC.spec.js --grep "(?=.*@smoke)(?=.*@reg)"     | AND: TCs containing both tags
 * 
 */


test('user can login 1', { tag: ['@smoke'] }, async ({ page }) => {
    console.log("###Title: 1"); 
});
 
test('user can login 2', { tag: ['@smoke'] }, async ({ page }) => {
    console.log("###Title: 2"); 
});

test('user can login 3', { tag: ['@reg3' ] }, async ({ page }) => {
    console.log("###Title: 3"); 
});

test('user can login 4', { tag: ['@reg3'] }, async ({ page }) => {
    console.log("###Title: 2"); 
});

test('user can login 5', { tag: ['@e2e'] }, async ({ page }) => {
    console.log("###Title: 2"); 
});

test('user can login 6', { tag:  ['@smoke', '@reg3', '@e2e' ] }, async ({ page }) => {
    console.log("###Title: 2"); 
});

test('user can login 7', { tag:  ['@smoke', '@reg3', '@e2e' ] }, async ({ page }) => {
    console.log("###Title: 2"); 
});
