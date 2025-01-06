============================================================================================================
============================================================================================================
============================================================================================================
#Docs
============================================================================================================


============================================================================================================
============================================================================================================
#Installation
============================================================================================================


Q: How to Debug API Automation Code 
https://cognizant.udemy.com/course/playwright-tutorials-automation-testing/learn/lecture/31110862#overview
Section 11 > Chapter 53

#Steps:
1. package.json
     existing:   "scripts": {},
     new     :   "scripts": { "test": "npx playwright test tests/abc.spec.js --headed" },

 "scripts": { "test": "npx playwright test tests/Y1_Basics_GET.spec.js --headed" },
     

2. playwright.config.js 
    increase timeout, as during debuggin 30sec is too less 
        existing: timeout: 30000,    
        new:      timeout: 600000,     

3. Add debug point in the code 

4. Visual Studio  >  Shift Cntr P  >  Debug npm script 


