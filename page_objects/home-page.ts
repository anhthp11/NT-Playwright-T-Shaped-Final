import { Page,Locator } from '@playwright/test';
import { baseUrl } from '../env/url';
import { productName, productPrice } from '../env/locator';
import { shortWaitingTime } from '../env/base';

export interface ProductData {
    name: string;
    price: string;
};

export class HomePage {
    readonly page: Page;
    
    constructor(page:Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(baseUrl + '/home');
    }

    async addItemToCart(productName: string) {
        const addToCartButton = this.page.locator(`//*[text()='${productName}']/following-sibling::button`);
        await addToCartButton.click();
        await this.page.waitForTimeout(shortWaitingTime);
    }

    async getProductInfo(productName: string):Promise<ProductData> {
        return {
            name: await this.page.locator(`//*[text()='${productName}']`).innerText(),
            price: await this.page.locator(`//*[text()='${productName}']/following-sibling::p`).innerText(),
        }
    }
}