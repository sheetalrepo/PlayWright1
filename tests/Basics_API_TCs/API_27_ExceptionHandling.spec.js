const { test, expect, request } = require('@playwright/test');



/**
 * 
 * npx playwright test API_27_ExceptionHandling.spec.js
 * 
 */

test('API_TC1: Basic GET Request', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/1/");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(500);
});



test('API_TC2: Basic GET Request', async ({ request }) => {
    try {

        const response = await request.get("https://swapi.py4e.com/api/people/1/");
        expect(response.status()).toBe(500);
        const responseBody = await response.json();

    } catch (error) {
        console.error('Error during GET request:', error);
    }

});



test('TC 3 POST request with error handling', async ({ page }) => {
    try {

        const response = await page.request.post('https://api.example.com/data', {
            data: {}
        });

        expect(response.ok()).toBe(true);
        const responseBody = await response.json();

        expect(responseBody).toHaveProperty('id');
    } catch (error) {
        console.error('Error during POST request:', error);
    }
});
