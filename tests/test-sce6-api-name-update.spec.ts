import { request, test, expect } from "@playwright/test";
import { users } from "../test_data/user-data";
import { AuthAPI } from "../core/api/auth-api";
import { UserAPI } from "../core/api/user-api";
import * as allure from 'allure-js-commons';

let token: string;
let currentName: string;

test.beforeAll( async ({ request }) => {
    await allure.step('Login and get current name', async () => {
        const user = await AuthAPI.login(request, users[0].username, users[0].password);
        token = user.token;
        //console.log('Token: ', token);

        const currentProfile = await UserAPI.getProfile(request, token);
        currentName = currentProfile.name;
        //console.log('Current Name:', currentName);
    });
});

test.afterAll(async ({ request }) => {
    await allure.step('Revert Old Name', async () => {
        //console.log('Old name to be reverted', currentName);

        const revertOldName = await UserAPI.updateFullName(request, token, currentName)
        const updatedProfile = await UserAPI.getProfile(request, token);

        //console.log('Current name is:', updatedProfile.name);
        await allure.step('Verify full name is reverted', async () => {
            expect(revertOldName.name).toEqual(updatedProfile.name);
        });
    });
});



test('SCE6: Update Full name by API', async ({ request }) => {
    await allure.description( "Update Full Name by API" );
    const newName = "Truong Hong Phuong Anh";
    //console.log('New name to be updated:', newName);

    const updatingProfile = await UserAPI.updateFullName(request, token, newName);
    const updatedProfile = await UserAPI.getProfile(request,token);

    //console.log('Current name is:', updatedProfile.name);
    await allure.step('Verify full name is updated', async () => {
        expect(updatingProfile.name).toEqual(updatedProfile.name);
    });
});

