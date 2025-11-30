const { LoginLocators } = require("./LoginLocators");
const { Urls } = require("../../Config/Urls");

class LoginActions {
    constructor(page) {
        this.page = page;
        this.locators = new LoginLocators();
        this.urls = new Urls();
    }

    async navigateToLogin() {
        await this.page.goto(this.urls.SAUCEDEMO_LOGIN);
    }

    async enterUsername(username) {
        await this.page.fill(this.locators.usernameInput, username);
    }

    async enterPassword(password) {
        await this.page.fill(this.locators.passwordInput, password);
    }

    async clickLogin() {
        await this.page.click(this.locators.loginButton);
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async isProductsPageVisible() {
        return await this.page.isVisible(this.locators.productsTitle);
    }
}

module.exports = { LoginActions };
