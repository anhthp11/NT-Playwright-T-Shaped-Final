import { Locator, type Page } from '@playwright/test';
import { shortWaitingTime } from '../env/base';
import * as allure from 'allure-js-commons';
import { BasePage, type NavigablePage } from './base-page';

export interface UserData {
    username: string;
    password: string;
    name: string;
    token?: string;
};

export class LoginPage extends BasePage implements NavigablePage {
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByTestId('login-username');
        this.passwordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-submit');
    }

    async goto(): Promise<void> {
        await this.navigateTo('/login');
    }

    async login(user: UserData) {
        await allure.step('Enter username', async () => {
            await this.usernameInput.fill(user.username);
        });

        await allure.step('Enter password', async () => {
            await this.passwordInput.fill(user.password);
        });

        await allure.step('Click Login button', async () => {
            await this.loginButton.click();
        });
            await this.page.waitForTimeout(shortWaitingTime);
    }

    async getHeaderUsername(): Promise<string | null> {
        return this.page.getByTestId('header-username').textContent();
    }
}