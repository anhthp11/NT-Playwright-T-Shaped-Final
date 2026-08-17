import * as api from '../../env/endpoint';
import * as allure from 'allure-js-commons';

export class AuthAPI {
    static async login(request: any, username: string, password: string) {
        const loginResult = await allure.step('Login by API', async () => {
            const response = await request.post(api.loginAPI, {
                data: { username, password }
            });
            return await response.json();
        });
        return loginResult;
    }
}