import { expect } from '@wdio/globals';

class FormsPage {
    
    formsScreen() {
        return $('~Forms-screen');
    }

    textInput() {
        return $('~text-input');
    }

    textInputResult() {
        return $('~input-text-result');
    }

    activeButton() {
        return $('~button-Active');
    }

    inactiveButton() {
        return $('~button-Inactive');
    }

    switchButton() {
        return $('~switch');
    }

    async verifyFormsPageOpen() {
        await expect(this.formsScreen()).toBeDisplayed();
        await expect(this.textInput()).toBeDisplayed();
    }

    async enterText(text) {
        await this.textInput().setValue(text);
    }

    async clickActiveButton() {
        await this.activeButton().click();
    }
}

export default new FormsPage();