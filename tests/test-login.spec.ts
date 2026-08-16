import { test,expect } from '../core/fixtures/page-fixture';
import { LoginPage } from '../page_objects/login-page';
import { user1 } from '../test_data/user-data';

test('SCE1: Login with valid credentials', async ({ loginPage }) => {
    // Go to the login page
    await loginPage.goto();
    // Perform login with valid credentials
    await loginPage.login(user1.username, user1.password);
    // Verify if the login was successful by checking for the presence of the user's name in the header
    const headerUsername = await loginPage.page.getByTestId('header-username').textContent();
    await expect(headerUsername).toBe('Xin chào, ' + user1.name);
});