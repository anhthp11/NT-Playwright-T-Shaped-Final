import { Page,Locator } from '@playwright/test';
import { baseUrl } from '../env/url';
import { productName, productPrice } from '../env/locator';
import { longWaitingTime, shortWaitingTime } from '../env/base';
import * as allure from 'allure-js-commons';

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

    async addProductToCart(productName: string) {
        await allure.step("Add product to cart", async () => {
            const addToCartButton = this.page.locator(`//*[text()='${productName}']/following-sibling::button`);
            await addToCartButton.click();
            await this.page.waitForTimeout(shortWaitingTime);
        });
    }


    async getProductInfo(productName: string):Promise<ProductData> {
            return {
                name: await this.page.locator(`//*[text()='${productName}']`).innerText(),
                price: await this.page.locator(`//*[text()='${productName}']/following-sibling::p`).innerText(),
            }
    }

    
    async getAllProductsInfo(products: string[]):Promise<ProductData[]> {
        const productInfos: ProductData[] = [];
        for (let i = 0; i < products.length; i++) {
            const productInfo = await this.getProductInfo(products[i]);
            //console.log(productInfo);
            productInfos.push(productInfo);

        }
        return productInfos;
    }

    async addAllProductToCart(products: string[]) {
        const productInfos: ProductData[] = [];
        for (let i = 0; i < products.length; i++) {
            await this.addProductToCart(products[i]);
            await this.page.waitForTimeout(longWaitingTime);
        }
    }
}