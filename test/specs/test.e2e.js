import homePage from "./pages/home.page.js";
import loginPage from "./pages/login.page.js";
import formsPage from "./pages/forms.page.js";
import swipePage from "./pages/swipe.page.js";

import {
    randomEmail,
    randomPassword,
    randomText
} from "./utils/testData.js";

import { expect } from "@wdio/globals";

describe("Demo app testing", () => {

    beforeEach(async () => {
        await homePage.openHome();
    });


    it("Successful Login", async () => {

        await homePage.openLogin();

        await loginPage.verifyLoginPageOpen();

        await loginPage.login(
            randomEmail(),
            randomPassword()
        );

         await loginPage.verifySuccessfulLogin();

         await loginPage.closeSuccessMessage();
    });


    it("Invalid Email", async () => {

        await homePage.openLogin();

        await loginPage.verifyLoginPageOpen();

        await loginPage.login(
            "invalid-email",
            randomPassword()
        );

        await expect(
            loginPage.emailErrorMessage()
        ).toBeDisplayed();
    });


    it("Empty Credentials", async () => {

        await homePage.openLogin();

        await loginPage.verifyLoginPageOpen();

        await loginPage.login(
            "",
            ""
        );

        await expect(
            loginPage.emailErrorMessage()
        ).toBeDisplayed();

        await expect(
            loginPage.passwordErrorMessage()
        ).toBeDisplayed();
    });


    it("Forms Input", async () => {

        await homePage.openForms();

        await formsPage.verifyFormsPageOpen();

        const text = randomText();

        await formsPage.enterText(text);

        await expect(
            formsPage.textInputResult()
        ).toHaveText(text);
    });


    it('Swipe Carousel', async () => {

    await homePage.openSwipe();

    await swipePage.verifySwipePageOpen();

    await swipePage.verifyFirstCard();

    await swipePage.swipeToLastCard();

});

});


