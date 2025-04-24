const { test, expect, request } = require('@playwright/test');

/**
 * 
 * 
 * 
 * #Run: npx playwright test API_24_Auth_RefreshToken.spec.js
 */

test.describe.configure({ mode: 'serial' });
let accessTokenGlobal;  //Global
let refreshTokenGlobal; //Global


/**
 * Fetch Refresh Token
 */
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
    const responseHeaders = response.headers(); // Response Headers
    const responseBody = await response.json(); // Response Body
    console.log(responseBody);

    accessTokenGlobal = responseBody.accessToken; // Store the access token in the shared variable
    refreshTokenGlobal = responseBody.refreshToken;
    console.log("### Original Access Token: " + accessTokenGlobal);
    console.log("### Original Refresh Token: " + refreshTokenGlobal);

    console.log("===========================#Prodbug108#TC1#===========================");
});



/**
 * 
 * POST https://dummyjson.com/auth/refresh
 *      - Call to renew Access Token/Refresh Token
 *      - Call hit in the background without user knowledge
 *      - User remain login in website     
 * 
 * Access Token: 
 *      - This is usually short-lived and needs to be refreshed frequently. 
 *      - When you call the refresh token endpoint, a new access token is generated.
 * 
 * Refresh Token: 
 *      - This is longer-lived and is used to obtain new access tokens. 
 *      - Some systems also regenerate the refresh token when you call the refresh endpoint, 
 *          while others keep the same refresh token until it expires or is revoked.
 * 
 */
test('API_TC2: Generate New Access Token and Refresh Token', async ({ request }) => {
    console.log("### Old Refresh Token: " + refreshTokenGlobal);

    const response = await request.post("https://dummyjson.com/auth/refresh", {
        
        headers: {
            'Content-type': 'application/json'
        },

        data: {
            refreshToken: `${refreshTokenGlobal}`,    //Back tick imp
            expiresInMins: 30
        },

        credentials: 'include' 
      });


    expect(response.status()).toBe(200);


    // Log Response Headers and Body
    const responseHeaders = response.headers(); // Response Headers
    const responseBody = await response.json(); // Response Body
    console.log(responseHeaders); // verify set-cookie in header
    console.log(responseBody);    // New Access token and refresh token

    console.log("===========================#Prodbug108#TC2#===========================");
});