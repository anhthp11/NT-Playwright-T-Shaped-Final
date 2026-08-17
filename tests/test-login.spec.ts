import { test,expect } from '../core/fixtures/page-fixture';
import { LoginPage } from '../page_objects/login-page';
import { users } from '../test_data/user-data';

test('SCE1: Login with valid credentials', async ({ loginPage }) => {
    // Go to the login page
    await loginPage.goto();
    // Perform login with valid credentials
    await loginPage.login(users[0]);
    // Verify if the login was successful by checking for the presence of the user's name in the header
    const headerUsername = await loginPage.page.getByTestId('header-username').textContent();
    expect(headerUsername).toBe('Xin chào, ' + users[0].name);
});