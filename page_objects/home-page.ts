import { type Locator, type Page } from '@playwright/test';
import { longWaitingTime, shortWaitingTime } from '../env/base';
import * as allure from 'allure-js-commons';
import { BasePage, type NavigablePage } from './base-page';

export interface ProductData {
    name: string;
    price: string;
};

export class HomePage extends BasePage implements NavigablePage {
    private readonly productNames: Locator;

    constructor(page: Page) {
        super(page);
        this.productNames = page.locator('//*[@class="product-name"]');
    }

    async goto(): Promise<void> {
        await this.navigateTo('/home');
    }

    async addProductToCart(productName: string) {
        await allure.step("Add product to cart", async () => {
            const productNameLocator = this.productNames.filter({ hasText: productName });
            const addToCartButton = productNameLocator.locator('xpath=following-sibling::button');
            await addToCartButton.click();
            await this.page.waitForTimeout(shortWaitingTime);
        });
    }

    async getProductInfo(productName: string):Promise<ProductData> {
        const productNameLocator = this.productNames.filter({ hasText: productName });
        return {
            name: await productNameLocator.innerText(),
            price: await productNameLocator.locator('xpath=following-sibling::p').innerText(),
        };
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