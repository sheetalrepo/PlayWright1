const { test, expect, request } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const baseUrl = 'https://swapi.py4e.com/api/';


/**
 * Read CSV
 *  - skip the header using slice method
 *  - map csv column values with keys
 *  - return a map
 *  - trim is imp to remove extra spaces, new line char etc
 */
function readCSV(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  const lines = data.trim().split('\n').slice(1);  //skip csv header
  return lines.map(line => {
    const [title, id] = line.trim().split(',');     //map csv column value with keywords 
    return `${baseUrl}${title}/${id}/`;
  });
}



/**
 * 
 * npx playwright test API_29_CSVRead.spec.js
 * 
 */

test('API_TC1: Read CSV and verify URLs', async ({ request }) => {
  console.log("===========================#Prodbug108#===========================");
  const urls = readCSV(path.resolve(__dirname, 'api_29_test_data.csv'));
  console.log("###URLs Map: ", urls);

  for (const url of urls) {
    console.log("###Final URL: ", url);
    const response = await request.get(url);
    expect(response.status()).toBe(200);
  }
});

