const fs = require('fs');

/**
 * File Location: Root Folder 
 *    - ProjectNameFolder\log_api_requests.txt
 *   
 */
async function logRequest(url, payload, response) {
  const logEntry = {
    url,
    payload,
    status: response.status(),
    responseBody: await response.json(), // Await the response body
    timestamp: new Date().toISOString()
  };

  fs.appendFile('log_api_requests.txt', JSON.stringify(logEntry) + '\n', (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    } else {
      console.log("Log written to file.");
    }
  });
}

module.exports = { logRequest };