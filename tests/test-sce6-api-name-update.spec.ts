import { test, expect } from "@playwright/test";
import { users } from "../test_data/user-data";
import { AuthAPI } from "../core/api/auth-api";
import { UserAPI } from "../core/api/user-api";
import * as allure from 'allure-js-commons';

let userAPI: UserAPI;
let token: string;
let currentName: string;

test.beforeEach(async ({ request }) => {
    await allure.step('Login and get current name', async () => {
        const authAPI = new AuthAPI(request);
        userAPI = new UserAPI(request);
        const user = await authAPI.login(users[0].username, users[0].password);
        token = user.token;

        const currentProfile = await userAPI.getProfile(token);
        currentName = currentProfile.name;
    });
});

test.afterEach(async () => {
    await allure.step('Revert Old Name', async () => {
        const revertOldName = await userAPI.updateFullName(token, currentName);
        const updatedProfile = await userAPI.getProfile(token);

        await allure.step('Verify full name is reverted', async () => {
            expect(revertOldName.name).toEqual(updatedProfile.name);
        });
    });
});

test('SCE6: Update Full name by API', async () => {
    await allure.description( "Update Full Name by API" );
    const newName = "Truong Hong Phuong Anh";

    const updatingProfile = await userAPI.updateFullName(token, newName);
    const updatedProfile = await userAPI.getProfile(token);

    await allure.step('Verify full name is updated', async () => {
        expect(updatingProfile.name).toEqual(updatedProfile.name);
    });
});
