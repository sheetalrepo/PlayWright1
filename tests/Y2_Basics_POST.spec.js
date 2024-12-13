const { test, expect } = require('@playwright/test');


test('POST request Create New Booking', async ({ request }) => {

    const response = await request.post("/booking", {
      data: {
        firstname: "Prod",
        lastname: "Bug",
        totalprice: 108,
        depositpaid: true,
        bookingdates: {
          checkin: "2024-04-15",
          checkout: "2024-04-20",
        },
        additionalneeds: "Testing API",
      },
    });

    //Print Response
    console.log(JSON.stringify(response));

    //Basic Verification
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    //Response Verification
    const responseBody = await response.json();
    expect(responseBody.booking).toHaveProperty("totalprice", 108);
    expect(responseBody.booking).toHaveProperty("firstname", "Prod");
    expect(responseBody.booking).toHaveProperty("lastname", "Bug");
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
    });