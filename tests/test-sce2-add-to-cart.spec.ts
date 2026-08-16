import { products } from '../test_data/product-data';
import { test, expect } from '../core/fixtures/page-fixture';
import { user1 } from '../test_data/user-data';
import { shortWaitingTime } from '../env/base';
import { CartItemData } from '@page_objects/cart-page';
import { ProductData } from '@page_objects/home-page';


test.beforeEach(async ({ loginPage }) => {
    // Go to the login page and perform login with valid credentials
    await loginPage.goto();
    await loginPage.login(user1.username, user1.password);
    await loginPage.page.waitForTimeout(shortWaitingTime);
});

test.afterEach(async ({cartPage})=> {
    // Delete all cart items
    await cartPage.deleteAllCartItems();
});

test('SCE2: Add item to cart and verify cart contents', async ({ homePage, cartPage }) => {
    // Variables
    const productInfos: ProductData[] = [];

    // Go to the home page and add an item to the cart
    await homePage.goto();
    
    // Get item full info
    for (let i = 0; i < products.length; i++) {
        const productInfo = await homePage.getProductInfo(products[i]);
        console.log(productInfo);
        productInfos.push(productInfo);

        // Add item to cart
        await homePage.addItemToCart(products[i]);
    }

    // Go to the cart page and verify the item is present in the cart
    await cartPage.goto();
    const cartItems:CartItemData[] = await cartPage.getCartItems();
    console.log(cartItems);

    //assertion
    expect(productInfos.length).toBe(cartItems.length);

    for (let i = 0; i < cartItems.length; i++) {
        expect(cartItems[i].name).toBe(productInfos[i].name);
        expect(cartItems[i].price).toContain(productInfos[i].price);
        const unitTotal = Number(cartItems[i].unitTotal.split('đ')[0]);
        const multiplyResults = Number(productInfos[i].price.split('đ')[0])*Number(cartItems[i].quantity);
        expect(unitTotal.toFixed(3)).toEqual(multiplyResults.toFixed(3));
    }
});