import * as api from '../../env/endpoint';
import * as allure from 'allure-js-commons';
import type { APIRequestContext } from '@playwright/test';

export interface UserProfile {
    name: string;
}

export class UserAPI {
    constructor(private readonly request: APIRequestContext) {}

    async getProfile(token: string): Promise<UserProfile> {
        const profile = await allure.step('Get user information by API', async () => {
            const response = await this.request.get(api.userAPI, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return await response.json();
        });
        return profile;
    }

    async updateFullName(token: string, name: string): Promise<UserProfile> {
        const updateFullNameResult = await allure.step('Update full name by API', async () => {
            const response = await this.request.patch(api.userAPI, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    name
                }
            });
            /*if (response.code = 200) {
                console.log('Name updated!');
            }*/
            return await response.json();
        });
        return updateFullNameResult;
    }
}