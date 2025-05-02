const { test, expect, request } = require('@playwright/test');

// Define the Person class
class Person {
  constructor(data) {
      this.name = data.name;
      this.height = data.height;
      this.mass = data.mass;
      this.hair_color = data.hair_color;
      this.skin_color = data.skin_color;
      this.eye_color = data.eye_color;
      this.birth_year = data.birth_year;
      this.gender = data.gender;
      this.homeworld = data.homeworld;
      this.films = data.films;
      this.species = data.species;
      this.vehicles = data.vehicles;
      this.starships = data.starships;
      this.created = data.created;
      this.edited = data.edited;
      this.url = data.url;
  }
}


/**
 *  npx playwright test API_31_POJOStyple.spec.js
 * 
 */

test('API_TC1: Verify Response using JS Objects', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/1/");
    console.log(await response.json());
    expect(response.status()).toBe(200);
    const responseBody = await response.json();


    // Save response in JS class
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
    expect(person.films).toContain("https://swapi.py4e.com/api/films/1/");
    expect(person.species).toContain("https://swapi.py4e.com/api/species/1/");
    expect(person.vehicles).toContain("https://swapi.py4e.com/api/vehicles/14/");
    expect(person.starships).toContain("https://swapi.py4e.com/api/starships/12/");
    expect(person.created).toBe("2014-12-09T13:50:51.644000Z");
    expect(person.edited).toBe("2014-12-20T21:17:56.891000Z");
    expect(person.url).toBe("https://swapi.py4e.com/api/people/1/");
});

