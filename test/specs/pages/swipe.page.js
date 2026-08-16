import { expect } from '@wdio/globals';

class SwipePage {

    swipeScreen() {
        return $('android=new UiSelector().description("Swipe-screen")');
    }

    firstCard() {
        return $('android=new UiSelector().description("card").instance(0)');
    }

    lastCard() {
    return $('android=new UiSelector().description("card").instance(1)');
    }

    async verifySwipePageOpen() {
        await expect(this.swipeScreen()).toBeDisplayed();
    }

    async verifyFirstCard() {
        await expect(this.firstCard()).toBeDisplayed();
    }

    async swipeLeft() {
        const screen = await this.swipeScreen();

        await screen.touchAction([
            'press',
            {
                action: 'moveTo',
                x: 900,
                y: 450
            },
            {
                action: 'moveTo',
                x: 100,
                y: 450,
                duration: 800
            },
            'release'
        ]);

        await browser.pause(1000);
    }

    async swipeToLastCard() {
        for (let i = 0; i < 6; i++) {
            await this.swipeLeft();
        }

        await expect(this.lastCard()).toBeDisplayed();
    }
}

export default new SwipePage();