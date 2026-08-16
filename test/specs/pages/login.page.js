import { expect } from '@wdio/globals';

class LoginPage {

    emailInput() {
        return $('~input-email');
    }

    passwordInput() {
        return $('~input-password');
    }

    loginSubmitButton() {
        return $('~button-LOGIN');
    }

    // $('android=new UiSelector().textContains("LOGIN")');

    emailErrorMessage() {
        return $('android=new UiSelector().textContains("Please enter a valid email address")');
    }

    passwordErrorMessage() {
        return $('android=new UiSelector().textContains("Please enter at least 8 characters")');
    }

    successMessage() {
        return $('android=new UiSelector().textContains("You are logged in!")');
    }

    okButton() {
        return $('android=new UiSelector().textContains("OK")');
    }

    async verifyLoginPageOpen() {
        await expect(this.emailInput()).toBeDisplayed();
        await expect(this.passwordInput()).toBeDisplayed();
        await expect(this.loginSubmitButton()).toBeDisplayed();
    }

    async login(email, password) {
        await this.emailInput().setValue(email);
        await this.passwordInput().setValue(password);
        await this.loginSubmitButton().click();
    }

    async verifySuccessfulLogin() {
        await expect(this.successMessage()).toBeDisplayed();
    }

    async closeSuccessMessage() {
        await this.okButton().click();
    }
}

export default new LoginPage();