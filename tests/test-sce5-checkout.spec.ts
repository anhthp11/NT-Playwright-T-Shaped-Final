import { test, expect } from '../core/fixtures/page-fixture';
import { receivers, users } from '../test_data/user-data';
import { ProductData } from '@page_objects/home-page';
import { products } from '../test_data/product-data';
import { CartItemData } from '@page_objects/cart-page';
import { ConfirmedBooking } from '@page_objects/checkout-page';
import { paymentMethods } from '../test_data/payment-data';
import { navigateToPage } from '../page_objects/base-page';
import { CurrencyUtils } from '@core/utils/currency-utils';
import * as allure from 'allure-js-commons';

test('SCE5: Checkout succeeds with valid receiver info (COD)', async ({ loginPage, homePage, cartPage, checkoutPage }) => {
    await navigateToPage(loginPage);
    await loginPage.login(users[0]);

    await navigateToPage(homePage);
    const productInfos: ProductData[] = await homePage.getAllProductsInfo(products);
    await homePage.addAllProductToCart(products);

    await navigateToPage(cartPage);
    expect(await cartPage.isCheckoutButtonVisible()).toBe(true);

    await allure.step('Verify products before checkout', async () => {
        const cartItems: CartItemData[] = await cartPage.getCartItems();
        expect(cartItems).toHaveLength(productInfos.length);
        expect(cartItems.map((item) => item.name)).toEqual(productInfos.map((product) => product.name));

        for (let index = 0; index < cartItems.length; index++) {
            expect(cartItems[index].name).toBe(products[index]);
            expect(CurrencyUtils.parseCurrency(cartItems[index].price))
                .toEqual(CurrencyUtils.parseCurrency(productInfos[index].price));
            expect(Number(cartItems[index].quantity)).toBe(1);
            expect(CurrencyUtils.parseCurrency(cartItems[index].unitTotal))
                .toEqual(CurrencyUtils.parseCurrency(productInfos[index].price));
        }
    });

    const cartTotal = await cartPage.getCartTotal();
    await allure.step('Click on Checkout Button', async () => {
        await cartPage.clickCheckoutButton();
    });
    await allure.step("Verify 'Đặt hàng ngay' button is displayed", async () => {
        expect(await checkoutPage.isCheckoutSubmitButtonVisible()).toBe(true);
    });

    await allure.step("Fill Receiver's Information", async () => {
        await checkoutPage.fillReceiverInfo(receivers[0]);
    });
    await allure.step('Select Payment Method', async () => {
        await checkoutPage.selectPaymentMethod(paymentMethods[0].code);
    });
    await allure.step("Click on 'Đặt hàng ngay' button", async () => {
        await checkoutPage.checkoutSubmit();
    });

    await allure.step('Verify Success booking result is displayed', async () => {
        expect(await checkoutPage.isCheckoutSuccessVisible()).toBe(true);
    });

    await allure.step('Verify confirmed booking details', async () => {
        const confirmedInfo: ConfirmedBooking = await checkoutPage.getConfirmedBookingInformation();
        expect(confirmedInfo).toMatchObject({
            fullname: receivers[0].fullname,
            address: receivers[0].address,
            total: cartTotal,
            paymentMethod: expect.stringContaining(paymentMethods[0].confirmedName),
        });
        expect(confirmedInfo.bookingCode).toBeTruthy();
    });
});
