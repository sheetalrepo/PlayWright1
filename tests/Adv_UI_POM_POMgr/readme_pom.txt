============================================================================================================
============================================================================================================
#Playwright Page Object Model (POM)
============================================================================================================

#FW Features:
1. POM Implementation
2. Multiple browser support 
3. Parallel Running
4. Viewport settings for diff screen sizes (playwright.config2.js)
5. Testing on diff Mobile devices 
6. Copy Prompt feature(v1.51+) to take help of AI LLMs
7. Allure Reporting


#POM 
1. Every Page is having a separate Page class
2. POManager to handle all the pages 
3. TC only need to call POManager to access any page 
Note:  in playwright version 1.51 and above

#Presentation Layer


#Business Layer


#Test Layer
1. Separate Test cases for all the pages 
2. Parallel Running

#Data Layer 
1. Reading all test data from external test_data JSON
2. Every TC can have separate test data in the form of JSON
3. Easy to update test data 
4. Easy to add complex data structure in JSON

#Reporting 
Playwright Reporting



============================================================================================================
============================================================================================================
#How to run cases:
============================================================================================================
npx playwright test --headed TestHomePageNew.spec.js
npx playwright test --headed TestLoginPageNew.spec.js



============================================================================================================
