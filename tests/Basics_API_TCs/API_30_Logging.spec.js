const { test, expect, request } = require('@playwright/test');
const { logRequest } = require('./Util_Logger.js');



/**
 * 
 * npx playwright test API_30_Logging.spec.js
 * 
 * Log file path:
 *      root folder > log_api_requests.txt
 *    
 */

test('API_TC1: Log Basic GET Request', async ({ request }) => {
  console.log("===========================#Prodbug108#===========================");

  const url = "https://swapi.py4e.com/api/people/1/";
  const response = await request.get(url);

  //Calling FileUtil method
  await logRequest(url, null, response); 

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});



test('API_TC2: Log Basic GET Request', async ({ request }) => {
  console.log("===========================#Prodbug108#===========================");

  const url = "https://swapi.py4e.com/api/people/8/";
  const response = await request.get(url);

  //Calling FileUtil method
  await logRequest(url, null, response); 

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});