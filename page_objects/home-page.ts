import type { Page } from '@playwright/test';
import { longWaitingTime, shortWaitingTime } from '../env/base';
import * as allure from 'allure-js-commons';
import { BasePage, type NavigablePage } from './base-page';

export interface ProductData {
    name: string;
    price: string;
};

export class HomePage extends BasePage implements NavigablePage {
    constructor(page: Page) {
        super(page);
    }

    async goto(): Promise<void> {
        await this.navigateTo('/home');
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
        for (let i = 0; i < products.length; i++) {
            await this.addProductToCart(products[i]);
            await this.page.waitForTimeout(longWaitingTime);
        }
    }
}