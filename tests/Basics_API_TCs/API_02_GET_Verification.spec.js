const { test, expect, request } = require('@playwright/test');



/**
 * #How to run
 * Open Terminal > Go to Root Folder MyRepo\PlayWright1
 *        npx playwright test API_02_GET_Verification.spec.js
 * 
 */


/**
 * Partial Response Verification
 *      - response.toHaveProperty(key, val)
 *      - path.toBe(val)
 *      - path.toContain(val) | List
 */
test('API_TC1: GET Request Assertions', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/10");

    //print
    console.log(await response.json());

    //verification
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //Detailed Verification
    const responseBody = await response.json();

    //Option 1: toHaveProperty
    expect(responseBody).toHaveProperty("name", "Obi-Wan Kenobi");
    expect(responseBody).toHaveProperty("height", "182");
    expect(responseBody).toHaveProperty("url", "https://swapi.py4e.com/api/people/10/");
    expect(responseBody.height).toHaveLength(3);

    //Option 2: toBe
    expect(responseBody.name).toBe("Obi-Wan Kenobi");
    expect(responseBody.height).toBe("182");
    expect(responseBody.url).toBe("https://swapi.py4e.com/api/people/10/");

    //Option 3: toContain used in case of Partial Search or in Lists / Arrays
    expect(responseBody.name).toContain("Kenobi");
    expect(responseBody.starships).toContain("https://swapi.py4e.com/api/starships/74/");
    expect(responseBody.films).toContain("https://swapi.py4e.com/api/films/5/");
    expect(responseBody.films).toEqual(
        expect.arrayContaining([
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/"
        ])
      );


    //Conditional Assertions
    expect(responseBody).toMatchObject({
        height: expect.any(String),
        url: expect.stringContaining('/people/10/'),
        skin_color: expect.stringMatching(/^[A-Za-z\s]+$/),
    });
      
});




/**
 * Complete JSON Response Verification
 *     - Deep Equality Assertions
 *     - Hard coded way
 */
test('API_TC2: GET Request Assertions -  Deep Equality', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/10");

    //print
    console.log(await response.json());

    //verification
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //Detailed Verification
    //Expected JSON
    const expectedResponse = {
        name: "Obi-Wan Kenobi",
        height: "182",
        mass: "77",
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male",
        homeworld: "https://swapi.py4e.com/api/planets/20/",
        films: [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/",
            "https://swapi.py4e.com/api/films/3/",
            "https://swapi.py4e.com/api/films/4/",
            "https://swapi.py4e.com/api/films/5/",
            "https://swapi.py4e.com/api/films/6/"
        ],
        "species": [
            "https://swapi.py4e.com/api/species/1/"
        ],
        vehicles: [
            "https://swapi.py4e.com/api/vehicles/38/"
        ],
        starships: [
            "https://swapi.py4e.com/api/starships/48/",
            "https://swapi.py4e.com/api/starships/59/",
            "https://swapi.py4e.com/api/starships/64/",
            "https://swapi.py4e.com/api/starships/65/",
            "https://swapi.py4e.com/api/starships/74/"
        ],
        created: "2014-12-10T16:16:29.192000Z",
        edited: "2014-12-20T21:17:50.325000Z",
        url: "https://swapi.py4e.com/api/people/10/"
    };

    // Verify all fields in the response
    const responseBody = await response.json();
    expect(responseBody).toEqual(expectedResponse);
});




test('API_TC3: GET Request Time Verification', async ({ request }) => {

    const startTime = Date.now();
    const response = await request.get("https://swapi.py4e.com/api/people/1/");
    const endTime = Date.now();

    //Time Verifications
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(endTime - startTime).toBeLessThan(1000); // Response time should be less than 1 second
});
