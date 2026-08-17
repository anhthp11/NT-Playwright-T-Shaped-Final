//Home page
export const productName = '//*[@class="product-name"]';
export const productPrice = '//*[@class="product-price"]';

//Cart page
export const checkoutButton = '//button[@class="checkout-btn"]';
export const cartItem = 'xpath=.//div[@class="cart-item"]';
export const cartItemInfo = 'xpath=.//div[@class="item-info"]';
export const cartItemName = 'xpath=.//*[@class="item-name"]';
export const cartItemCategory = 'xpath=.//*[@class="item-category"]';
export const cartItemPrice = 'xpath=.//*[@class="item-unit-price"]';
export const cartItemQuantity = 'xpath=.//div[@class="item-qty"]/span';
export const cartItemTotalPrice = 'xpath=.//div[@class="item-total"]';
export const cartItemRemoveButton = 'xpath=.//button[@class="remove-btn"]';
export const cartEmpty = 'xpath=.//div[@class="cart-empty"]';
export const cartTotal = 'xpath=.//div[@class="summary-total"]/span[contains(text(),"đ")]';

//Checkout page
export const confirmedฺBookingCode = 'xpath=.//div[@class="checkout-success"]/p[contains(text(),"Mã đơn hàng")]/strong';
export const confirmedReceiverName = 'xpath=.//div[@class="checkout-success"]/p[contains(text(),"Người nhận")]/strong';
export const confirmedReceiverAddress = 'xpath=.//div[@class="checkout-success"]/p[not(*) and not(@class)]';
export const confirmedPaymentMethod = 'xpath=//div[@class="checkout-success"]/p/strong[contains(text(),"Tiền") or contains(text(),"Thẻ")]';
export const confirmedTotal = 'xpath=.//div[@class="checkout-success"]/p[@class="success-total"]';