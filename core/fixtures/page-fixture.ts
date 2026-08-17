import { test as base, expect } from '@playwright/test';
import { HomePage } from '@page_objects/home-page';
import { CartPage } from '@page_objects/cart-page';
import { LoginPage } from '@page_objects/login-page';
import { CheckoutPage } from '@page_objects/checkout-page';

type AppFixture = {
    loginPage: LoginPage;
    homePage: HomePage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};

export const test = base.extend<AppFixture>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    checkoutPage: async ({ page }, use) => {
        const checkOutPage = new CheckoutPage(page);
        await use(checkOutPage);
    },
});

export { expect };