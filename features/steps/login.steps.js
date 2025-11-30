const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { LoginActions } = require("../../src/pages/Login/LoginActions");

let browser, context, page, login;

Given("I am on the SauceDemo login page", async function () {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();

    login = new LoginActions(page);
    await login.navigateToLogin();
});

When(
    "I login with valid username {string} and password {string}",
    async function (username, password) {
        await login.login(username, password);
    }
);

Then("I should see the products page", async function () {
    const visible = await login.isProductsPageVisible();
    if (!visible) throw new Error("Products page not visible");
    await browser.close();
});
