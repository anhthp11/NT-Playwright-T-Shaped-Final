import { Page,Locator } from '@playwright/test';
import { baseUrl } from '../env/url';
import { shortWaitingTime } from '../env/base';

export interface UserData {
    username: string;
    password: string;
    name: string;
    token?: string;
};

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.usernameInput = page.getByTestId('login-username');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-submit');
    }

    async goto() {
        await this.page.goto(baseUrl + '/login');
    }

    async login(user: UserData) {
        await this.usernameInput.fill(user.username);
        await this.passwordInput.fill(user.password);
        await this.loginButton.click();
        await this.page.waitForTimeout(shortWaitingTime);
    }
}