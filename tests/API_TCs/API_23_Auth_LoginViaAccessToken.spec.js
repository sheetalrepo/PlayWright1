const { test, expect, request } = require('@playwright/test');


/**
 * This Class is to use Access Token rather username and password to login
 *      - POST https://dummyjson.com/auth/login
 *      - Pass User/Password
 * 
 * Serial Mode:
 *      - serial mode is necessary to make sure TC2 runs after TC1 i.e. in the same sequence as appear in code
 * 
 * #Run: npx playwright test API_23_Auth_LoginViaAccessToken.spec.js
 */

test.describe.configure({ mode: 'serial' });
let accessTokenGlobal; // Global Shared Variable



test('API_TC1: Login using User Password', async ({ request }) => {
    const response = await request.post("https://dummyjson.com/auth/login", {
        headers: {
            'Content-type': 'application/json'
        },
        data: {
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 10
        },
        credentials: 'include'
    });

    // Log Response Headers and Body
    const responseBody = await response.json(); // Response Body
    console.log(responseBody);

    // Store the access token in the shared variable
    accessTokenGlobal = responseBody.accessToken; 

    console.log("===========================#Prodbug108#TC1#===========================");
});


/**
 * GET https://dummyjson.com/auth/me
 *      - without using Access Token
 *      - 401 Unauthorised 
 */
test('API_TC1: Login Without Using Access Token', async ({ request }) => {
    //Login without Access Token
    const response = await request.get("https://dummyjson.com/auth/me");
    expect(response.status()).toBe(401);
    console.log(response);
    
    console.log("===========================#Prodbug108#TC1#===========================");
});


/**
 * GET https://dummyjson.com/auth/me
 *      - Return detailed user info
 *      - Need Access Token to access GET link
 * 
 */
test('API_TC3: Login Using Access Token', async ({ request }) => {

    //Login via Access Token
    const responseGET = await request.get("https://dummyjson.com/auth/me", {
        headers: {
            'Authorization': `Bearer ${accessTokenGlobal}` // Use the access token from TC1
        },
        credentials: 'include'
    });


    // Log Response Headers and Body
    const responseHeadersGET = responseGET.headers(); // Response Headers
    const responseBodyGET = await responseGET.json(); // Response Body
    //console.log(responseHeadersGET);
    console.log(responseBodyGET);

    expect(responseGET.status()).toBe(200);
    console.log("===========================#Prodbug108#TC3#===========================");
});