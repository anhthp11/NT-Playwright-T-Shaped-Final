import { products } from '../test_data/product-data';
import { test, expect } from '../core/fixtures/page-fixture';
import { users } from '../test_data/user-data';
import { CartItemData } from '@page_objects/cart-page';
import { ProductData } from '@page_objects/home-page';
import { CurrencyUtils } from '@core/utils/currency-utils';
import * as allure from 'allure-js-commons';

test.beforeEach(async ({ loginPage }) => {
    // Go to the login page and perform login with valid credentials
    await allure.step('Go to Login Page', async () => {
        await loginPage.goto();
    });

    await allure.step("Login with valid credentials", async () => {
        await loginPage.login(users[0]);
    });
});

test.afterEach(async ({cartPage})=> {
    // Delete all cart items
    await allure.step("Delete all items in the cart", async () => {
        await cartPage.deleteAllCartItems();
    });    
});

test('SCE2: Add item to cart and verify cart contents', async ({ homePage, cartPage }) => {
    // Variables
    let productInfos: ProductData[] = [];
    let sumTotal: number = 0;

    await allure.step("Go to Home Page", async () => {
        await homePage.goto();
    });  

    // Get product's full info
    await allure.step("Get all product's details", async () => {
        productInfos = await homePage.getAllProductsInfo(products);
    });
    
    // Add all products to cart
    await allure.step("Add all products to cart", async () => {
        await homePage.addAllProductToCart(products);
    });

    // Go to the cart page and verify the item is present in the cart
    await allure.step("Go to cart", async () => {
        await cartPage.goto();
    });

    // Assertion
    await allure.step("Verify data in the cart", async () => {
        const cartItems:CartItemData[] = await cartPage.getCartItems();
        await allure.step("Verify total numbers of products in the cart", async () => {
            expect(productInfos.length).toBe(cartItems.length);
        });

        for (let i = 0; i < cartItems.length; i++) {
            await allure.step("Verify product's name", async () => {
                expect(cartItems[i].name).toBe(productInfos[i].name);
            });
            await allure.step("Verify product's price", async () => {
                expect(cartItems[i].price).toContain(productInfos[i].price);
            });
            
            const price = CurrencyUtils.parseCurrency(productInfos[i].price);
            const unitTotal = CurrencyUtils.parseCurrency(cartItems[i].unitTotal);
            const multiplyResults =  price * Number(cartItems[i].quantity);
            await allure.step("Verify unit Total price of the products", async () => {
               expect(unitTotal).toEqual(multiplyResults);
            });
            sumTotal += multiplyResults;
        }
        const cartTotalValue = await cartPage.getCartTotal();
        await allure.step("Verify total price of the cart", async () => {
            expect(CurrencyUtils.parseCurrency(cartTotalValue)).toEqual(sumTotal);
        });
    });
});