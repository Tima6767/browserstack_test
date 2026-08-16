class HomePage {
    homeButton() {
        return $('~Home');
    }

    loginButton() {
        return $('~Login');
    }

    formsButton() {
        return $('~Forms');
    }

    swipeButton() {
        return $('~Swipe');
    }

    async openHome() {
        await this.homeButton().click();
    }

    async openLogin() {
        await this.loginButton().click();
    }

    async openForms() {
        await this.formsButton().click();
    }

    async openSwipe() {
        await this.swipeButton().click();
    }
}

export default new HomePage();