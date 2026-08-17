import { test, expect } from '../core/fixtures/page-fixture';
import { shortWaitingTime } from '../env/base';
import { receivers, users } from '../test_data/user-data';
import { ProductData } from '@page_objects/home-page';
import { products } from '../test_data/product-data';
import { CartItemData } from '@page_objects/cart-page';
import { ConfirmedBooking, ReceiverInfo } from '@page_objects/checkout-page';
import { paymentMethods } from '../test_data/payment-data';

test.beforeEach( async({loginPage, homePage, cartPage}) => {
    // Go to the login page and perform login with valid credentials
    await loginPage.goto();
    await loginPage.login(users[0]);
    await loginPage.page.waitForTimeout(shortWaitingTime);

    const productInfos: ProductData[] = [];

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

    // Go to the cart page
    await cartPage.goto();
    await cartPage.checkoutButton.isVisible();
});

test('SCE5: Checkout succeeds with valid receiver info (COD)', async ({cartPage, checkoutPage}) => {
    const cartTotal = await cartPage.getCartTotal();
    //console.log(cartTotal);
    
    await cartPage.clickCheckoutButton(); // Click Checkout Button
    expect(checkoutPage.checkoutSubmitButton).toBeVisible(); // Expect Checkout Page is displayed

    await checkoutPage.fillReceiverInfo(receivers[0]); // Fill Receiver Information
    await checkoutPage.selectPaymentMethod(paymentMethods[0].code); // Select COD as Payment Method
    await checkoutPage.clickCheckoutSubmitButton(); // Click Đặt hàng ngay
    
    //Assertion
    expect(checkoutPage.checkoutSuccess).toBeVisible();

    const confirmedInfo:ConfirmedBooking = await checkoutPage.getConfirmedBookingInformation(); // Get confirmed booking information
    //console.log(confirmedInfo);
    
    expect(confirmedInfo).toMatchObject({
        fullname: receivers[0].fullname,
        address: receivers[0].address,
        total:  cartTotal,
        paymentMethod: expect.stringContaining(paymentMethods[0].confirmedName),
    });
    expect(confirmedInfo.bookingCode).toBeTruthy();
});