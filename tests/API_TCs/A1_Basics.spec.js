const { test, expect, request } = require('@playwright/test');


test('My First PlayWrite Test Case 5', async ({page}) =>{

    await page.goto('https://playwright.dev/');
    console.log(await page.title());
})


test('Verify GET API response', async ({ request }) => {
    // Define the URL
    const url = 'https://jsonplaceholder.typicode.com/posts/1'; // Replace with your API endpoint
  
    // Send a GET request
    const response = await request.get(url);
  
    // Verify the status code
    expect(response.status()).toBe(200);
  
    // Parse and log the response body
    const responseBody = await response.json();
    console.log(responseBody);
  
    // Perform additional validations on the response
    expect(responseBody).toHaveProperty('id', 1); // Example validation
  });