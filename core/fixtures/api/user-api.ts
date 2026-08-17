import * as api from '../../../env/endpoint';

export class UserAPI {
    static async getProfile(request: any, token: string) {
        const response = await request.get(api.userAPI, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return await response.json();
    }

    static async updateFullName(request: any, token: string, name: string) {
        const response = await request.patch(api.userAPI, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                name
            }
        });
        if (response.code = 200) {
            console.log('Name updated!');
        }
        return await response.json();
    }
}