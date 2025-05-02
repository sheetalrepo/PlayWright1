const { test, expect, request } = require('@playwright/test');

/**
 * #How to run
 *    npx playwright test API_15_POST_GET_Chaining.spec.js
 * 
 * 
 * To Format JSON output:
 *  console.log(JSON.stringify(postResponseBody, null, 2));
 * 
 * 
 * #Note: Backticks ``
 * In JavaScript, 
 *  - single quotes (') and double quotes (") are used for defining string literals
 *  - they do not support string interpolation i.e. we cant use ${param_id}
 *  - To use string interpolation, you need to use backticks (`) only
 *  - Focus on await in front of post and get
 * 
 * Refer: https://jsonplaceholder.typicode.com/guide/
 * 
 */


test('API_TC1: POST and GET Request Chaining', async ({ request }) => {
    // POST request
    const postResponse = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data: {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
    });

    const postResponseBody = await postResponse.json(); // Response Body from POST
    console.log(postResponseBody);
    console.log(JSON.stringify(postResponseBody, null, 2)); // Formatted JSON output
    expect(postResponse.status()).toBe(201);


    // GET request using the ID from the POST response
    const getResponse = await request.get(`https://jsonplaceholder.typicode.com/posts/${postResponseBody.userId}`);
    const getResponseBody = await getResponse.json(); // Response Body from GET
    console.log(getResponseBody);

    // Verify the GET response
    if (getResponseBody.userId === postResponseBody.userId) {
        console.log('GET Response verification successful!');
    } else {
        console.log('GET Response verification failed.');
    }

    console.log("===========================#Prodbug108#===========================");
});