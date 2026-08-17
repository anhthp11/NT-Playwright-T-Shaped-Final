import { test, expect } from '../core/fixtures/page-fixture';
import { shortWaitingTime } from '../env/base';
import { receivers, users } from '../test_data/user-data';
import { ProductData } from '@page_objects/home-page';
import { products } from '../test_data/product-data';
import { ConfirmedBooking, ReceiverInfo } from '@page_objects/checkout-page';
import { paymentMethods } from '../test_data/payment-data';
import * as allure from 'allure-js-commons';

test.beforeEach( async({loginPage, homePage, cartPage}) => {
    //Variables
    let productInfos: ProductData[] = [];

    // Go to the login page and perform login with valid credentials
    await allure.step('Go to Login Page', async () => {
        await loginPage.goto();
    });

    await allure.step("Login with valid credentials", async () => {
        await loginPage.login(users[0]);
    });


    // Go to the home page
    await allure.step("Go to Home Page", async () => {
        await homePage.goto();
    });
    
    // Get product's full info
    await allure.step("Get All Product's Details", async () => {
        productInfos = await homePage.getAllProductsInfo(products);
    });
    
    // Add all products to cart
    await allure.step("Get All Product's Details", async () => {
        await homePage.addAllProductToCart(products);
    });

    // Go to the cart page
    await allure.step("Go to cart", async () => {
        await cartPage.goto();
        await cartPage.checkoutButton.isVisible();
    });
});

test('SCE5: Checkout succeeds with valid receiver info (COD)', async ({cartPage, checkoutPage}) => {
    const cartTotal = await cartPage.getCartTotal();
    //console.log(cartTotal);
    await allure.step("Click on Checkout Button", async () => {
        await cartPage.clickCheckoutButton();
    });
    await allure.step("Verify 'Đặt hàng ngay' button is displayed", async () => {
        expect(checkoutPage.checkoutSubmitButton).toBeVisible();
    });

    await allure.step("Fill Receiver's Information", async () => {
        await checkoutPage.fillReceiverInfo(receivers[0]);
    });
    await allure.step("Select Payment Method", async () => {
        await checkoutPage.selectPaymentMethod(paymentMethods[0].code);
    });
    await allure.step("Click on 'Đặt hàng ngay' button", async () => {
        await checkoutPage.checkoutSubmit();
    });
    
    //Assertion
    await allure.step("Verify Success booking result is displayed", async () => {
        expect(checkoutPage.checkoutSuccess).toBeVisible();
    });

    await allure.step("Verify confirmed booking details", async () => {
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
});