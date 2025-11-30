# PlayWright Web Automation Framework (JavaScript + BDD)

A clean and scalable **Playwright Web Automation Framework** built using **JavaScript**, **Cucumber BDD**, and **Page Object Model**.  
This project demonstrates industry-standard automation design with **separated locators, actions, config, reporting, and BDD scenarios**.

---

## Features

✔ Playwright for fast and reliable browser automation  
✔ Cucumber BDD (Given–When–Then)  
✔ Page Object Model (POM)  
✔ Separate classes for **Locators**, **Actions**, and **URLs**  
✔ HTML Reporting  
✔ Clean folder structure  
✔ Easy to extend for an entire automation suite   

---

## Folder Structure
playwright-bdd-js/
│
├── features/
│ ├── login.feature
│ └── steps/
│ └── login.steps.js
│
├── src/
│ ├── config/
│ │ └── Urls.js
│ └── pages/
│ └── Login/
│ ├── LoginLocators.js
│ └── LoginActions.js
│
├── reports/ # auto-generated
├── cucumber.js
├── playwright.config.js
├── package.json
├── README.md
└── .gitignore


---

## 🧪 Running Tests

Install dependencies:

npm install

Run all BDD tests:

npx cucumber-js


Run Playwright tests in UI mode:

npx playwright test --ui

## Tech Stack

Playwright (Browser Automation)

Cucumber.js (BDD)

JavaScript

Node.js

Page Object Model

HTML Reporting

## Test Website

This project uses SauceDemo as the practice web application:
