import * as allure from 'allure-js-commons';
import { test,expect } from '../core/fixtures/page-fixture';
import { navigateToPage } from '../page_objects/base-page';
import { users } from '../test_data/user-data';

test('SCE1: Login with valid credentials', async ({ loginPage }) => {
    await allure.step('Go to Login Page', async () => {
        await navigateToPage(loginPage);
    });

    await allure.step("Login with valid credentials", async () => {
        await loginPage.login(users[0]);
    });

    await allure.step("Verify username in header", async () => {
        const headerUsername = await loginPage.getHeaderUsername();
        expect(headerUsername).toBe('Xin chào, ' + users[0].name);
    });    
});
