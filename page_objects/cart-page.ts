import { Locator, Page } from '@playwright/test';
import * as locator from '../env/locator';
import { ProductData } from './home-page';
import { shortWaitingTime } from '../env/base';
import { BasePage, type NavigablePage } from './base-page';

export interface CartItemData extends ProductData {
    //category: string;
    quantity: string;
    unitTotal: string;
};

export class CartPage extends BasePage implements NavigablePage {
    private readonly checkoutButton: Locator;
    private readonly cartTotal: Locator;

    constructor(page: Page) {
        super(page);
        this.checkoutButton = page.locator(locator.checkoutButton);
        this.cartTotal = page.locator(locator.cartTotal);
    }

    async goto(): Promise<void> {
        await this.navigateTo('/cart');
    }

    async isCheckoutButtonVisible(): Promise<boolean> {
        return this.checkoutButton.isVisible();
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