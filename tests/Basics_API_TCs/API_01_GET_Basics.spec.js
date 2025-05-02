const { test, expect, request } = require('@playwright/test');



/**
 * #How to run
 * Open Terminal > Go to Root Folder MyRepo\PlayWright1
 *        npx playwright test API_01_GET_Basics.spec.js
 * 
 */




test('API_TC1: Basic GET Request', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/1/");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});



/**
 * playwright.config.js
 *      use:
 *          baseURL:'https://swapi.py4e.com/api/'
 * 
 * IMP: baseURL shd end with '/'
 * 
 * 
 */
test('API_TC2: Base URL Config', async ({ request }) => {
    const response = await request.get("people/1");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});



test('API_TC3: Basic Assertions', async ({ request }) => {
    // Define the URL
    const url = 'https://jsonplaceholder.typicode.com/posts/1';

    // Send a GET request
    const response = await request.get(url);
  
    // Verify the status code
    expect(response.status()).toBe(200);
  
    // Parse and log the response body
    const responseHeaders = response.headers(); // Response Headers
    const responseBody = await response.json(); //Response Body
    console.log(responseHeaders);
    console.log(responseBody);
  
    //Verify Headers
    expect(responseHeaders).toHaveProperty('content-type', 'application/json; charset=utf-8');
    expect(responseHeaders).toHaveProperty('connection', 'keep-alive');
    expect(responseHeaders['content-type']).toContain('application/json');

    //Verify Response
    expect(responseBody).toHaveProperty('userId', 1);
    expect(responseBody).toHaveProperty('id', 1);
    expect(responseBody).toHaveProperty('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
    expect(responseBody.body).toContain('recusandae consequuntur');
  });