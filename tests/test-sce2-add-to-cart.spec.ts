import { products } from '../test_data/product-data';
import { test, expect } from '../core/fixtures/page-fixture';
import { users } from '../test_data/user-data';
import { shortWaitingTime } from '../env/base';
import { CartItemData } from '@page_objects/cart-page';
import { ProductData } from '@page_objects/home-page';


test.beforeEach(async ({ loginPage }) => {
    // Go to the login page and perform login with valid credentials
    await loginPage.goto();
    await loginPage.login(users[0]);
});

test.afterEach(async ({cartPage})=> {
    // Delete all cart items
    await cartPage.deleteAllCartItems();
});

test('SCE2: Add item to cart and verify cart contents', async ({ homePage, cartPage }) => {
    // Variables
    const productInfos: ProductData[] = [];
    let sumTotal: number = 0;

    // Go to the home page and add an item to the cart
    await homePage.goto();
    
    // Get item full info
    for (let i = 0; i < products.length; i++) {
        const productInfo = await homePage.getProductInfo(products[i]);
        //console.log(productInfo);
        productInfos.push(productInfo);

        // Add item to cart
        await homePage.addItemToCart(products[i]);
    }

    // Go to the cart page and verify the item is present in the cart
    await cartPage.goto();
    const cartItems:CartItemData[] = await cartPage.getCartItems();
    //console.log(cartItems);

    //assertion
    expect(productInfos.length).toBe(cartItems.length);

    for (let i = 0; i < cartItems.length; i++) {
        expect(cartItems[i].name).toBe(productInfos[i].name);
        expect(cartItems[i].price).toContain(productInfos[i].price);
        
        const price = Number(productInfos[i].price.replace('đ', '').replace(/\./g, ''));
        const unitTotal = Number(cartItems[i].unitTotal.replace('đ', '').replace(/\./g, ''));
        const multiplyResults =  price * Number(cartItems[i].quantity);
        expect(unitTotal).toEqual(multiplyResults);

        sumTotal += multiplyResults;
    }
    const cartTotalValue = await cartPage.getCartTotal();
    expect(Number(cartTotalValue.replace('đ', '').replace(/\./g, ''))).toEqual(sumTotal);
});