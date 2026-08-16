import { Page,Locator } from '@playwright/test';
import { baseUrl } from '../env/url';


export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page:Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('UserName');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goto() {
        await this.page.goto(baseUrl + '/login');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}