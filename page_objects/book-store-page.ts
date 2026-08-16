import { Page, Locator } from "@playwright/test";
import { baseUrl } from '../env/url';

export class BookStorePage {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly bookTitles: Locator;

    constructor(page:Page) {
        this.page = page;
        this.searchBox = page.getByPlaceholder("Type to search");
        this.bookTitles = page.locator("//span[contains(@id,'see-book')]");
    }

    async goto() {
        await this.page.goto(baseUrl + '/books');
    }

    async searchBooks(title:string) {
        await this.searchBox.fill(title);
    }

    async getBookTitles(): Promise<string[]> {
        const titles = await this.bookTitles.allTextContents();
        return titles;
    }
}