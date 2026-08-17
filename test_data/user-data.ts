import { UserData } from "@page_objects/login-page";
import { ReceiverInfo } from "@page_objects/checkout-page";

export const users: UserData[] = [
    {
        username: 'anh.truong',
        password: 'NTaccount@123',
        name: 'Truong Anh',
    },
];


export const receivers: ReceiverInfo[] = [
    {
        fullname: 'Trương Hồng Phương Anh',
        phone: '0775435328',
        address: '364 Cộng Hòa, phường Tân Bình, Thành phố Hồ Chí Minh',
    },
];