import { Page,Locator } from '@playwright/test';
import { baseUrl } from '../env/url';
import { productName, productPrice } from '../env/locator';

export interface ProductData {
    name: string;
    price: string;
    addToCartButton?: Locator;
};

export class HomePage {
    readonly page: Page;
    //readonly product: ProductData;
    
    constructor(page:Page) {
        this.page = page;
        /*this.product = {
            name: page.locator(productName),
            price: page.locator(productPrice)
        };*/
    }

    async goto() {
        await this.page.goto(baseUrl + '/home');
    }

    async addItemToCart(productName: string) {
        const addToCartButton = this.page.locator(`//*[text()='${productName}']/following-sibling::button`);
        await addToCartButton.click();
    }

    async getProductInfo(productName: string):Promise<ProductData> {
        return {
            name: await this.page.locator(`//*[text()='${productName}']`).innerText(),
            price: await this.page.locator(`//*[text()='${productName}']/following-sibling::p`).innerText(),
        }
    }
}