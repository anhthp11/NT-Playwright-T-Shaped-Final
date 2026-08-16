import { Page,Locator } from '@playwright/test';
import { baseUrl } from '../env/url';
import { longWaitingTime } from '../env/base';

export class ProfilePage {
    readonly page: Page;
    readonly bookRows: Locator;
    readonly confirmButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.bookRows = page.locator("//span[contains(@id,'see-book')]/ancestor::div[@role='row']");
        this.confirmButton = page.locator("//button[@id='closeSmallModal-ok']");
    }

    async goto() {
        await this.page.goto(baseUrl + '/profile');
    }

    async getBookTitles(): Promise<string[]> {
        return await this.bookRows.locator("//span").allTextContents();
    }

    async deleteBookByTitle(title: string) {
        const bookRow = this.bookRows.filter({
            has: this.page.locator("//a[contains(text(),'"+ title +"')]")
        });
        
        const deleteButton = bookRow.locator("//span[@title='Delete']");
        await deleteButton.click();

        //click on OK button on the alert
        this.page.on('dialog', async dialog => {
            // console.log(dialog.message());
            dialog.accept();
        });
        await this.confirmButton.click();

        // Waiting for the alert to be displayed as it is slow
        await this.page.waitForTimeout(longWaitingTime);
    }
}