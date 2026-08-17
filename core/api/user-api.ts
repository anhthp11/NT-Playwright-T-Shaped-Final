import * as api from '../../env/endpoint';
import * as allure from 'allure-js-commons';

export class UserAPI {
    static async getProfile(request: any, token: string) {
        const profile = await allure.step('Get user information by API', async () => {
            const response = await request.get(api.userAPI, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return await response.json();
        });
        return profile;
    }

    static async updateFullName(request: any, token: string, name: string) {
        const updateFullNameResult = await allure.step('Update full name by API', async () => {
            const response = await request.patch(api.userAPI, {
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