export interface PaymentMethod {
    code: string,
    name: string,
    confirmedName: string
};
export const paymentMethods : PaymentMethod[] = [
    {
        code: 'COD',
        name: 'Thanh toán khi nhận hàng',
        confirmedName: 'Tiền mặt khi nhận hàng'
    },
    {
        code: 'Stripe',
        name: 'Thanh toán bằng thẻ',
        confirmedName: 'Thẻ'
    }
]