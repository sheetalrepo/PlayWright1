const { test, expect, request } = require('@playwright/test');

/**
 * 
 * playwright.config.js 
 *    retries: 2,
 * 
 * npx playwright test API_28_RetryLogic.spec.js
 * 
 */

test('API_TC1: Basic GET Request', async ({ request }) => {
  console.log("===========================#Prodbug108#===========================");
  const response = await request.get("https://swapi.py4e.com/api/people/1/");
  //console.log(await response.json());
  expect(response.status()).toBe(500);
});
