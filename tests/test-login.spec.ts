import * as allure from 'allure-js-commons';
import { test,expect } from '../core/fixtures/page-fixture';
import { LoginPage } from '../page_objects/login-page';
import { users } from '../test_data/user-data';

test('SCE1: Login with valid credentials', async ({ loginPage }) => {
    await allure.step('Go to Login Page', async () => {
        await loginPage.goto();
    });

    await allure.step("Login with valid credentials", async () => {
        await loginPage.login(users[0]);
    });

    await allure.step("Verify username in header", async () => {
        const headerUsername = await loginPage.page.getByTestId('header-username').textContent();
        expect(headerUsername).toBe('Xin chào, ' + users[0].name);
    });    
});
