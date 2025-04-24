const { test, expect, request } = require('@playwright/test');



/**
 * #How to run
 * Open Terminal > Go to Root Folder MyRepo\PlayWright1
 *        npx playwright test API_04_GET_Parameterized.spec.js
 * 
 * #Note:
 * In JavaScript, 
 *  - single quotes (') and double quotes (") are used for defining string literals
 *  - they do not support string interpolation i.e. we cant use ${param_id}
 *  - To use string interpolation, you need to use backticks (`) only
 */


const paramValues = [1, 2, 3, 4, 5]; // Array of parameter values

paramValues.forEach(param_id => {
    test(`API_TC1: GET Request with param_id=${param_id}`, async ({ request }) => {
        const response = await request.get(`https://swapi.py4e.com/api/people/${param_id}/`);
        
        console.log(JSON.stringify(await response.json(), null, 2)); // Formatted JSON output
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('url', `https://swapi.py4e.com/api/people/${param_id}/`);
    });
});