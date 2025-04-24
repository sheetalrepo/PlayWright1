const { test, expect, request } = require('@playwright/test');
const Ajv = require('ajv');
const schema = require('./api_03_schema.json');

/**
 * #How to run
 * npx playwright test API_03_GET_SchemaVerification.spec.js
 * 
 * 
 * npm install ajv
 * https://transform.tools/json-to-json-schema
 */


test('API_TC1: GET Request Schema Verification', async ({ request }) => {
    
    //GET Request
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    const responseBody = await response.json(); //Response Body
    console.log(responseBody);

    //Compile and Validate - Type 1
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const bool = validate(responseBody);

    //Verification
    expect(bool).toBe(true);
    expect(validate.errors).toBeNull();
    
    if (bool) {
        console.log('TC1: JSON is valid');
    } else {
        console.log('TC1: JSON is invalid:', validate.errors);
    }

    console.log("===========================#Prodbug108#===========================");
});




test('API_TC2: GET Request Schema Verification', async ({ request }) => {

    //GET request
    const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
    const responseBody = await response.json(); //Response Body
    console.log(responseBody);

    //Direct Validate - Type 2
    const ajv = new Ajv();
    const bool = ajv.validate(schema, responseBody);
    expect(bool).toBe(true);

    if (!bool) {
        console.error('###TC2: AJV Validation Errors:', ajv.errorsText());
    }

    if (bool) {
        console.log('###TC2: JSON is valid');
    } else {
        console.log('###TC2: JSON is invalid:', validate.errors);
    }

    console.log("===========================#Prodbug108#===========================");
});





 
    

