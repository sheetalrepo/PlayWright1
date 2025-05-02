const { test, expect, request } = require('@playwright/test');

/**
 * #How to run
 * npx playwright test API_10_POST_Basics.spec.js
 * 
 * 
 * Refer: https://jsonplaceholder.typicode.com/guide/
 * 
 */


test('API_TC1: POST Request Basics', async ({ request }) => {
    
    const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data: {
          title: 'foo',
          body: 'bar',
          userId: 1
        }
      });

    const responseBody = await response.json(); //Response Body
    console.log(responseBody);


    // Verify the response
    if (responseBody.id === 101) {
        console.log('Response verification successful!');
    } else {
        console.log('Response verification failed.');
    }

    console.log("===========================#Prodbug108#===========================");
});


test('API_TC2: POST Request with Headers', async ({ request }) => {
    
    const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
        
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },

        data: {
          title: 'Prod',
          body: 'Bug',
          userId: 2
        }
      });

   
    //Log Response Headers and Body
    const responseHeaders = response.headers(); // Response Headers
    const responseBody = await response.json(); //Response Body
    console.log(responseHeaders);
    console.log(responseBody);


    // Verify the response
    expect(response.status()).toBe(201);
    expect(responseBody).toHaveProperty('title', 'Prod');
    expect(responseBody).toHaveProperty('body', 'Bug');
    expect(responseBody).toHaveProperty('userId', 2);
    expect(responseBody).toHaveProperty('id', 101);


    if (responseBody.id === 101) {
        console.log('Response verification successful!');
    } else {
        console.log('Response verification failed.');
    }

    console.log("===========================#Prodbug108#===========================");
});