const { test, expect, request } = require('@playwright/test');

/**
 * This test will use normal username and password to login into the system for the first time
 * 
 *  #To include cookies in the request
 *      - credentials: 'include'
 *      - credentials: 'omit'
 * 
 *  #Purpose:
 *   The credentials option in requests is primarily used to control whether cookies, authorization headers, 
 *      or TLS client certificates are included in the request
 *   Some APIs require cookies or authorization headers to authenticate the user. 
 *      Without these, the request might fail or return a different response.
 * 
 *   #Refer:
 *      https://dummyjson.com/docs/auth
 * 
 *   #Run: npx playwright test API_22_Auth_LoginViaUserName.spec.js
 */

test('API_TC1: Login using User Password', async ({ request }) => {
    
    const response = await request.post("https://dummyjson.com/auth/login", {
        
        headers: {
            'Content-type': 'application/json'
        },

        data: {
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30
        },

        credentials: 'include' 
      });

    expect(response.status()).toBe(200);

    //Log Response Headers and Body
    const responseHeaders = response.headers(); // Response Headers
    const responseBody = await response.json(); //Response Body
    //console.log(responseHeaders);
    console.log(responseBody);

    console.log("===========================#Prodbug108#===========================");
});