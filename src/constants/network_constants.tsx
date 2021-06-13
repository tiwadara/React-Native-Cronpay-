export const MERCHANT_BASE_URL = 'https://cronpay.herokuapp.com/v1';
export const CLIENT_BASE_URL = 'https://recurp.herokuapp.com/api/v1';

export const BANKS = MERCHANT_BASE_URL + '/banks';

export const ACCOUNT = MERCHANT_BASE_URL + '/account';
export const VERIFY_ACCOUNT = ACCOUNT + '/enquiry';

export const MANDATES = MERCHANT_BASE_URL + '/mandates';

export const PAYMENT = CLIENT_BASE_URL + '/payment';
export const INIT_SDK = PAYMENT + '/methods/cmms/sdk-params';
