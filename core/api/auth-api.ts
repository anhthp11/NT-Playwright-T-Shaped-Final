import * as api from '../../env/endpoint';
import * as allure from 'allure-js-commons';
import type { APIRequestContext } from '@playwright/test';

export interface AuthResponse {
    token: string;
}

export class AuthAPI {
    constructor(private readonly request: APIRequestContext) {}

    async login(username: string, password: string): Promise<AuthResponse> {
        const loginResult = await allure.step('Login by API', async () => {
            const response = await this.request.post(api.loginAPI, {
                data: { username, password }
            });
            return await response.json();
        });
        return loginResult;
    }
}