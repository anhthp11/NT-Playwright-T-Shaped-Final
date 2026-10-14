import { Locator, Page } from '@playwright/test';
import { shortWaitingTime } from '../env/base';
import * as allure from 'allure-js-commons';
import { BasePage } from './base-page';

export interface ReceiverInfo {
    fullname: string,
    phone?: string,
    address: string,
};
export interface ConfirmedBooking extends ReceiverInfo {
    bookingCode: string,
    paymentMethod: string,
    total: string,
};

export class CheckoutPage extends BasePage {
    private readonly checkoutName: Locator;
    private readonly checkoutPhone: Locator;
    private readonly checkoutAddress: Locator;
    private readonly checkoutSubmitButton: Locator;
    private readonly checkoutSuccess: Locator;
    private readonly confirmedBookingCode: Locator;
    private readonly confirmedReceiverName: Locator;
    private readonly confirmedReceiverAddress: Locator;
    private readonly confirmedPaymentMethod: Locator;
    private readonly confirmedTotal: Locator;

    constructor(page: Page) {
        super(page);
        this.checkoutSubmitButton = page.getByTestId('checkout-submit');
        this.checkoutName = page.getByTestId('checkout-name');
        this.checkoutPhone = page.getByTestId('checkout-phone');
        this.checkoutAddress = page.getByTestId('checkout-address');
        this.checkoutSuccess = page.getByTestId('checkout-success-heading');
        this.confirmedBookingCode = page.locator('xpath=.//div[@class="checkout-success"]/p[contains(text(),"Mã đơn hàng")]/strong');
        this.confirmedReceiverName = page.locator('xpath=.//div[@class="checkout-success"]/p[contains(text(),"Người nhận")]/strong');
        this.confirmedReceiverAddress = page.locator('xpath=.//div[@class="checkout-success"]/p[not(*) and not(@class)]');
        this.confirmedPaymentMethod = page.locator('xpath=//div[@class="checkout-success"]/p/strong[contains(text(),"Tiền") or contains(text(),"Thẻ")]');
        this.confirmedTotal = page.locator('xpath=.//div[@class="checkout-success"]/p[@class="success-total"]');
    }

    async isCheckoutSubmitButtonVisible(): Promise<boolean> {
        return this.checkoutSubmitButton.isVisible();
    }

    async isCheckoutSuccessVisible(): Promise<boolean> {
        return this.checkoutSuccess.isVisible();
    }

    async checkoutSubmit() {
        await this.checkoutSubmitButton.click();
        await this.page.waitForTimeout(shortWaitingTime);
    }

    async fillReceiverInfo(receiver:ReceiverInfo) {
        await allure.step("Fill in the receiver's full name", async () => {
            await this.checkoutName.fill(receiver.fullname);
        });
        await allure.step("Fill in the receiver's phone number", async () => {
            if (receiver.phone) {
                await this.checkoutPhone.fill(receiver.phone);
            }
        });
        await allure.step("Fill in the receiver's address", async () => {
            await this.checkoutAddress.fill(receiver.address);
        });        
    }

    async selectPaymentMethod(paymentMethod:string) {
        await this.page.locator(`//*[contains(text(),'${paymentMethod}')]`).click();
    }

    async getConfirmedBookingInformation() : Promise<ConfirmedBooking> {
        return {
            bookingCode: await this.confirmedBookingCode.innerText(),
            paymentMethod: await this.confirmedPaymentMethod.innerText(),
            total: await this.confirmedTotal.innerText(),
            fullname: await this.confirmedReceiverName.innerText(),
            address: await this.confirmedReceiverAddress.innerText()
        }
    }
};