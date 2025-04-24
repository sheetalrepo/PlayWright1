const { test, expect, request } = require('@playwright/test');
//const Person = require('./tests/API_TCs/Person.js');
const Person = require('./Person.js');



/**
 *  npx playwright test API_32_POJOStyple2.spec.js
 * 
 */

test('API_TC1: Verify Response using JS Objects', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/1/");
    expect(response.status()).toBe(200);
    console.log(await response.json());


    // Save response in JS class
    const responseBody = await response.json();
    const person = new Person(responseBody);

    // Verification
    expect(person.name).toBe("Luke Skywalker");
    expect(person.height).toBe("172");
    expect(person.mass).toBe("77");
    expect(person.hair_color).toBe("blond");
    expect(person.skin_color).toBe("fair");
    expect(person.eye_color).toBe("blue");
    expect(person.birth_year).toBe("19BBY");
    expect(person.gender).toBe("male");
    expect(person.homeworld).toBe("https://swapi.py4e.com/api/planets/1/");
    expect(person.created).toBe("2014-12-09T13:50:51.644000Z");
    expect(person.edited).toBe("2014-12-20T21:17:56.891000Z");
    expect(person.url).toBe("https://swapi.py4e.com/api/people/1/");

    // Verification Arrays
    expect(person.films).toContain("https://swapi.py4e.com/api/films/1/");  //General
    expect(person.films[0]).toBe("https://swapi.py4e.com/api/films/1/");    //Based on Index
    expect(person.films[1]).toBe("https://swapi.py4e.com/api/films/2/");
    expect(person.species[0]).toContain("https://swapi.py4e.com/api/species/1/");
    expect(person.vehicles[1]).toContain("https://swapi.py4e.com/api/vehicles/30/");
    expect(person.starships[1]).toContain("https://swapi.py4e.com/api/starships/22/");

});

