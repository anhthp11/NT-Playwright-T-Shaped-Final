import { request, test, expect } from "@playwright/test";
import { users } from "../test_data/user-data";
import { AuthAPI } from "@core/fixtures/api/auth-api";
import { UserAPI } from "@core/fixtures/api/user-api";

let token: string;
let currentName: string;

test.beforeAll( async ({ request }) => {
    const user = await AuthAPI.login(
        request,
        users[0].username,
        users[0].password
    );

    token = user.token;
    //console.log('Token: ', token);

    const currentProfile = await UserAPI.getProfile(request,token);
    currentName = currentProfile.name;
    console.log('Current Name:', currentName);
});

test('SCE6: Update Full name, then clean up (revert old name) by API', async ({ request }) => {
    const newName = "Truong Hong Phuong Anh";
    console.log('New name to be updated:', newName);

    const updatingProfile = await UserAPI.updateFullName(
        request,
        token,
        newName
    )

    const updatedProfile = await UserAPI.getProfile(request,token);
    console.log('Current name is:', updatedProfile.name);

    expect(updatingProfile.name).toEqual(updatedProfile.name);
});

test.afterAll(async ({ request }) => {
    console.log('Old name to be reverted', currentName);
    const revertOldName = await UserAPI.updateFullName(
        request,
        token,
        currentName
    )
    const updatedProfile = await UserAPI.getProfile(request,token);

    console.log('Current name is:', updatedProfile.name);

    expect(revertOldName.name).toEqual(updatedProfile.name);
});

