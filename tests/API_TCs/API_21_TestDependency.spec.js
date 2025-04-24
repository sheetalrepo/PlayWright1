const { test, expect, request } = require('@playwright/test');



/**
 * 
 * 
 * Run: npx playwright test API_21_TestDependency.spec.js
 * 
 */

test.describe.configure({ mode: 'serial' });

test('API_TC1: Basic GET Request', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/1/");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log("===========================#Prodbug108#===========================");
});



test('API_TC2: Basic GET Request', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/2/");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log("===========================#Prodbug108#===========================");
});



test('API_TC3: Basic GET Request', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/3/");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log("===========================#Prodbug108#===========================");
});



test('API_TC4: Basic GET Request', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/4/");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log("===========================#Prodbug108#===========================");
});



test('API_TC5: Basic GET Request', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/5/");
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log("===========================#Prodbug108#===========================");
});
