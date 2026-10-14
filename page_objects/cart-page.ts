import { Locator, Page } from '@playwright/test';
import { ProductData } from './home-page';
import { shortWaitingTime } from '../env/base';
import { BasePage, type NavigablePage } from './base-page';

export interface CartItemData extends ProductData {
    //category: string;
    quantity: string;
    unitTotal: string;
};

export class CartPage extends BasePage implements NavigablePage {
    private readonly cartItems: Locator;
    private readonly checkoutButton: Locator;
    private readonly cartTotal: Locator;

    constructor(page: Page) {
        super(page);
        this.cartItems = page.locator('xpath=.//div[@class="cart-item"]');
        this.checkoutButton = page.locator('//button[@class="checkout-btn"]');
        this.cartTotal = page.locator('xpath=.//div[@class="summary-total"]/span[contains(text(),"đ")]');
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
        const count = await this.cartItems.count();

        for (let i = 0; i < count; i++) {
            const item = this.cartItems.nth(i);
            
            items.push({
                name: await item.locator('xpath=.//*[@class="item-name"]').innerText(),
                price: await item.locator('xpath=.//*[@class="item-unit-price"]').innerText(),
                quantity: await item.locator('xpath=.//div[@class="item-qty"]/span').innerText(),
                unitTotal: await item.locator('xpath=.//div[@class="item-total"]').innerText()
            });
        }

        return items;
    }

    async getCartTotal(): Promise<string> {
        return this.cartTotal.innerText();
    }

    async deleteAllCartItems() {
        while (await this.cartItems.count() > 0) {
            await this.cartItems
                .first()
                .locator('xpath=.//button[@class="remove-btn"]')
                .click();  
            await this.page.waitForTimeout(shortWaitingTime);
        }
    }
}