const { defineConfig, devices } = require('@playwright/test');  

module.exports = defineConfig({             
  testDir: './tests',
  timeout: 30000,                           
  expect: { timeout: 10000 },               
  fullyParallel: true,                      
  forbidOnly: !!process.env.CI,             
  retries: process.env.CI ? 2 : 0,          
  workers: process.env.CI ? 1 : undefined,  
  reporter: 'html', 
  
  projects: [
    {
      name: 'my_webkit_config',
      use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        browserName: 'webkit',
        baseURL: 'https://swapi.py4e.com/api/',
        headless: false,
        ...devices['iPhone 14 Pro']   //Pixel 3, Pixel 4
      }
    },
    {
      name: 'my_chrome_config',
      use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',                 //video
        browserName: 'chromium',
        baseURL: 'https://swapi.py4e.com/api/',
        headless: false,
        viewport: {width:412, height:915}          //Pixel 7 dimentions
      }
    },
    {
      name: 'my_firefox_config',
      use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',                 //video
        browserName: 'firefox',
        baseURL: 'https://swapi.py4e.com/api/',
        headless: false,
        ignoreHTTPSErrors: true,       //In case testing website is not SSL compliant   
        permissions: ['geolocation']   //In case website want to know user location, playwright will handle that automatically 
      }
    }
  ]
  

});

