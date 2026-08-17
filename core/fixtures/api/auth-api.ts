import * as api from '../../../env/endpoint';

export class AuthAPI {
    static async login(request: any, username: string, password: string) {
        const response = await request.post(api.loginAPI, {
            data: { username, password }
        });

        return await response.json();
    }
}