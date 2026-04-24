class LoginPage {
   
    //Sign up test
    get signUpButton() { return $('.HeaderMenu-link--sign-up') }
    get signUpHeader() { return $('h1.signups-rebrand__container-h1') }
    get loginUpField() { return $('#email') }
    get passwordUpField() { return $('#password') }
    get usernameUpField() { return $('#login') }
    get countryButton() { return $('#country-dropdown-panel-button')}
    get checkboxEmailLink() { return $('.FormControl-checkbox') }
    get createAccountButton() { return $('button[data-target="signup-form.SignupButton"]') }
    
    async clickOnSignUpButton() {
        await this.signUpButton.click()
    }
    async inputLoginUpField(value) {
        await this.loginUpField.setValue(value)
    }
    async inputPasswordUpField(value) {
        await this.passwordUpField.setValue(value)
    }

    async inputUsernameUpField(value) {
        await this.usernameUpField.setValue(value)
    }

    async chooseCountry(name) {
        await this.countryButton.click();
        const option = await $(`span=${name}`);
        await option.waitForDisplayed();
        await option.click();
    }

    async clickCheckboxEmailLink() {
        await this.checkboxEmailLink.click()
    }

    //Sign in test
    get signInButton() { return $('.HeaderMenu').$('a[href="/login"]') }
    get loginSignInButton() { return $('[value="Sign in"]') }
    get loginInField() { return $('#login_field') }
    get passwordInField() { return $('#password') }
    get signInPageTitle() { return $('//h1[normalize-space()="Sign in to GitHub"]') }

    async clickOnSignInButton() {
        await this.signInButton.click()
    }
    async clickLoginSignInButton() {
        await this.loginSignInButton.click()
    }
    async inputLoginInField(value) {
        await this.loginInField.setValue(value)
    }
    async inputPasswordInField(value) {
        await this.passwordInField.setValue(value)
    }
}

export default new LoginPage();