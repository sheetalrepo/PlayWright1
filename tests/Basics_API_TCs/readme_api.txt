============================================================================================================
============================================================================================================
============================================================================================================
#Docs
============================================================================================================
https://playwright.dev/docs/test-assertions


============================================================================================================
============================================================================================================
#TODO
============================================================================================================
Data-Driven Testing: Using external data sources (like JSON or CSV files) to drive your tests, 
        allowing for more comprehensive coverage.

Mocking and Stubbing: Simulating API responses to test how your application handles different scenarios without relying on the actual API.

Continuous Integration (CI): Integrating your tests into a CI pipeline to automatically run them on code changes, ensuring your API remains stable and reliable.




---------

In Java we have a POJO concept where we save API JSON response in a Java POJO class and later fetch JSON fields via Java POJO class.
Similary I want to save API response in a JS class and the fetch values and do assertion check using Playwright

I want to hit "GET https://swapi.py4e.com/api/people/1/"
And save response in a JS class similar to Java POJO
and then need to write a test class for assertions

Please note response contains normal key value, arrays etc

demo code:
const { test, expect, request } = require('@playwright/test');

test('API_TC1: Basic GET Request', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/1/");
    console.log(await response.json());
    
    //save response in JS class 

    //get details from JS class

    //verification
    expect()

});

Pls make Person class to include all element present in following json
name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld
films, species, vehicles, starships, created, edited, url

API Response:
{
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.py4e.com/api/planets/1/", 
    "films": [
        "https://swapi.py4e.com/api/films/1/", 
        "https://swapi.py4e.com/api/films/2/", 
        "https://swapi.py4e.com/api/films/3/", 
        "https://swapi.py4e.com/api/films/6/", 
        "https://swapi.py4e.com/api/films/7/"
    ], 
    "species": [
        "https://swapi.py4e.com/api/species/1/"
    ], 
    "vehicles": [
        "https://swapi.py4e.com/api/vehicles/14/", 
        "https://swapi.py4e.com/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.py4e.com/api/starships/12/", 
        "https://swapi.py4e.com/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.py4e.com/api/people/1/"
}





============================================================================================================
============================================================================================================
#How to #Debug API Automation Code  
============================================================================================================

https://www.udemy.com/course/playwright-tutorials-automation-testing/learn/lecture/31110862#overview
Section 11 > Chapter 53

#Steps:
1. package.json
     existing:   "scripts": {},
     new     :   "scripts": { "test": "npx playwright test tests/abc.spec.js --headed" },

    e.g.    
    "scripts": { "test": "npx playwright test tests/Y1_Basics_GET.spec.js --headed" },
    "scripts": { "test": "npx playwright test tests/API_TCs/API_29_CSVRead.spec.js --headed" },   

2. playwright.config.js 
    increase timeout, as during debuggin 30sec is too less 
        existing: timeout: 30000,    
        new:      timeout: 600000,     

3. Add debug point in the code 

4. Visual Studio  >  Shift Cntr P  >  Debug npm script 
   or
   terminal:  npm run test     


"scripts": {},
"scripts": { "test": "npx playwright test tests/API_29_CSVRead.spec.js --headed" },

============================================================================================================
============================================================================================================


TypeError: Person is not a constructor

  39 |
  40 |     // Save response in JS class
> 41 |     const person = new Person(responseBody);



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

test('API_TC1: Basic GET Request', async ({ request }) => {
    const response = await request.get("https://swapi.py4e.com/api/people/1/");
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
