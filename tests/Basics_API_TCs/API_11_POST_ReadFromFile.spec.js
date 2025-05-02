const { test, expect, request } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

/**
 * #How to run
 * npx playwright test API_11_POST_ReadFromFile.spec.js
 * 
 * 
 * Refer: https://jsonplaceholder.typicode.com/guide/
 * 
 * 
 * 
 */

test('API_TC1: POST Request Read From File', async ({ request }) => {
    
    // Read the request body from a file
    const filePath = path.resolve(__dirname, './api_11_req_body.json');
    const requestBody = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      data: requestBody
    });

    const responseBody = await response.json(); // Response Body
    console.log(responseBody);

    // Verify the response
    expect(response.status()).toBe(201);
    expect(responseBody).toHaveProperty('title', 'Prod Bug 108');
    expect(responseBody).toHaveProperty('body', 'From File');
    expect(responseBody).toHaveProperty('userId', 11);
    expect(responseBody).toHaveProperty('id', 101);


    if (responseBody.id === 101) {
        console.log('###TC1_Response verification successful!');
    } else {
        console.log('###Response verification failed.');
    }

    console.log("===========================#Prodbug108#===========================");
});


test('API_TC2: POST Request Read Headers and Body From File', async ({ request }) => {
    
  // Read Request Headers & Body from a File
  const filePath = path.resolve(__dirname, './api_11_req_headers_body.json');
  const requestConfig = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
    headers: requestConfig.headers,
    data: requestConfig.data
  });

  const responseBody = await response.json(); 
  console.log(responseBody);

  // Verify the response
  expect(response.status()).toBe(201);
  expect(responseBody).toHaveProperty('title', 'Prod Bug 108');
  expect(responseBody).toHaveProperty('body', 'From File');
  expect(responseBody).toHaveProperty('userId', 12);
  expect(responseBody).toHaveProperty('id', 101);


  if (responseBody.id === 101) {
      console.log('###TC2_Response verification successful!');
  } else {
      console.log('###Response verification failed.');
  }

  console.log("===========================#Prodbug108#===========================");
});