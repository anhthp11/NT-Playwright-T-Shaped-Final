import { Page,Locator } from '@playwright/test';
import { baseUrl } from '../env/url';
import * as locator from '../env/locator';
import { ProductData } from './home-page';
import { shortWaitingTime } from '../env/base';

export interface CartItemData extends ProductData {
    //category: string;
    quantity: string;
    unitTotal: string;
};

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly cartTotal: Locator;

    constructor(page:Page) {
        this.page = page;
        this.checkoutButton = page.locator(locator.checkoutButton);
        this.cartTotal = page.locator(locator.cartTotal);
    }

    async goto() {
        await this.page.goto(baseUrl + '/cart');
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
        await this.page.waitForTimeout(shortWaitingTime);
    }

    async getCartItems(): Promise<CartItemData[]> {
        const items: CartItemData[] = [];
        const cartItems = this.page.locator(locator.cartItem);
        const count = await cartItems.count();

        for (let i = 0; i < count; i++) {
            const item = cartItems.nth(i);
            
            items.push({
                name: await item.locator(locator.cartItemName).innerText(),
                price: await item.locator(locator.cartItemPrice).innerText(),
                quantity: await item.locator(locator.cartItemQuantity).innerText(),
                //category: await item.locator(locator.cartItemCategory).innerText(),
                unitTotal: await item.locator(locator.cartItemTotalPrice).innerText()
            });
        }

        return items;
    }

    async getCartTotal(): Promise<string> {
        return this.cartTotal.innerText();
    }

    async deleteAllCartItems() {
        const cartItems = this.page.locator(locator.cartItem);

        while (await cartItems.count() > 0) {
            await cartItems
                .first()
                .locator(locator.cartItemRemoveButton)
                .click();  
            await this.page.waitForTimeout(shortWaitingTime);
        }
    }
}