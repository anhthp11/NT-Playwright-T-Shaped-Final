import { Page,Locator } from '@playwright/test';
import { baseUrl } from '../env/url';
import * as locator from '../env/locator';
import { ProductData } from './home-page';
import { shortWaitingTime } from '../env/base';
import { UserData } from './login-page';

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

export class CheckoutPage {
    readonly page: Page;
    readonly checkoutName: Locator;
    readonly checkoutPhone: Locator;
    readonly checkoutAddress: Locator;
    readonly checkoutSubmitButton: Locator;
    readonly checkoutSuccess: Locator;
    readonly confirmedBookingCode: Locator;
    readonly confirmedReceiverName: Locator;
    readonly confirmedReceiverAddress: Locator;
    readonly confirmedPaymentMethod: Locator;
    readonly confirmedTotal: Locator;

    constructor(page:Page) {
        this.page = page;
        this.checkoutSubmitButton = page.getByTestId('checkout-submit');
        this.checkoutName = page.getByTestId('checkout-name');
        this.checkoutPhone = page.getByTestId('checkout-phone');
        this.checkoutAddress = page.getByTestId('checkout-address');
        this.checkoutSuccess = page.getByTestId('checkout-success-heading');
        this.confirmedBookingCode = page.locator(locator.confirmedฺBookingCode);
        this.confirmedReceiverName = page.locator(locator.confirmedReceiverName);
        this.confirmedReceiverAddress = page.locator(locator.confirmedReceiverAddress);
        this.confirmedPaymentMethod = page.locator(locator.confirmedPaymentMethod);
        this.confirmedTotal = page.locator(locator.confirmedTotal);
    }

    async clickCheckoutSubmitButton() {
        await this.checkoutSubmitButton.click();
    }

    async fillReceiverInfo(receiver:ReceiverInfo) {
        await this.checkoutName.fill(receiver.fullname);
        if (receiver.phone) {
            await this.checkoutPhone.fill(receiver.phone);
        }
        await this.checkoutAddress.fill(receiver.address);
    }

    async selectPaymentMethod(paymentMethod:string) {
        await this.page.locator(`//*[contains(text(),'${paymentMethod}')]`).click();
    }
    
    async checkoutSubmit() {
        await this.checkoutSubmitButton.click();
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