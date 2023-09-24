# Cypress Automation Project
## Description
A sample Cypress Automation framework created to test the https://magento.softwaretestingboard.com/ site.  The project makes use of standard Cypress calls (i.e. cy.get) plus other commands such as 'eq', 'contain.text', 'should/and' syntax for validations.  
The project is structured so that each Web page has it's own Page Object class to isolate the functionality of the page under test.

## Installation and Configuration Steps:
Follow the steps below to install and get the Framework up and running.
First though make sure you can reach the https://magento.softwaretestingboard.com/ as the entire testbed is built against this site.

### Installation Steps:
1. Clone this repo a directory on your system.
2. Navigate to the cloned directory.
3. Issue the following command to install: "$ npm install"
4. Post install open the code in your IDE
5. There are two ways to run the suite of tests:
    a/ From the command line via the command '$ npm run cy:run:chromium' to run the Chromium tests in with a browser.
    b/ Headlessly (without a browser) by running '$ cy:run:chrome'
6. After running one or the other commands and verifying that Cypress runs you can create new tests cases as needed.

## Project Details
The project runs using Cypress 13.2.0, with mochawesome 7.1.3 for test results reporting.

### Project File Structure:
The project is laid out in the following fashion and has the following folders and files:
cypress\e2e - the root for the Cypress test cases and Page Objects
cypress\e2e\pages - the main folder that contains the Page Object for the pages under test
cypress\e2e\spec.*.cy.js - any files that have 'spec' are tests executed in the test bed.
cypress\fixtures - common files used across the project, currently this is not used for this project.
cypress\support - are common utilities for the test bed.  
cypress\cypress.config.js - the Cypress configuration file.  Contains details on how the Framework runs. The baseUrl, the test bed reporter and env variables are defined here.
cypress\package.json - contains the build details, and npm scripts to run the test bed and parse test results to create reports.

### Node Scripts
There are a number of npm scripts created for this project.  These include scripts to execute the tests against specific browsers, and scripts to generate test reports. 
*NOTE:* These commands must be preceed with npm run <script name> to execute correctly.

    "merge-json" - this is used to merge all tests into one json file
    "marge" - command will take the merge-json results and produce the html reports
    "post-build" - runs the merge-json, and the marge command to create the results html report
    "cy:run:chrome" - runs a headless test run against Chrome browser
    "cy:run:chromium" - runs a headed version of the test bed.

### HTML Report Output
After the post-build command is run a report called 'output.html' located under a folder called 'mochawesome-report' off the root of the project.


