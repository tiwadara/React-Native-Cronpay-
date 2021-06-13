import { StorageConstants } from '../constants/storage_constants';
import * as Constants from '../constants/network_constants';
import { Storage } from './storage_service';
import type { PaymentData } from 'src/model/payment_data';

export const initSdk = async (token: String) => {
  let requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };
  try {
    let response = await fetch(Constants.INIT_SDK, requestOptions);
    let json = await response.json();
    console.log(json);
    await Storage.setItem(StorageConstants.SDK_INIT_DATA, json.data);
    await Storage.setItem(StorageConstants.TOKEN, json.data.accessToken);
    return json.data;
  } catch (error) {
    console.error('initSDK API : ' + error);
  }
};

export async function loadLocalBanks() {
  let banksList = await Storage.getItem(StorageConstants.BANKS).then(() =>
    getBanks()
  );
  return banksList ?? getBanks();
}

export const getBanks = async () => {
  let requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
        'Bearer ' + (await Storage.getItem(StorageConstants.TOKEN)),
    },
  };
  try {
    let response = await fetch(Constants.BANKS, requestOptions);
    let json = await response.json();
    Storage.setItem(StorageConstants.BANKS, json.data);
    return json.data;
  } catch (error) {
    console.error('getBanks API : ' + error.message);
  }
};

export const verifyBankDetails = async (accountNumber: any, bankId: any) => {
  console.log(accountNumber + bankId);
  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
        'Bearer ' + (await Storage.getItem(StorageConstants.TOKEN)),
    },
    body: JSON.stringify({
      accountNumber: accountNumber,
      bankId: bankId,
    }),
  };
  try {
    let response = await fetch(Constants.VERIFY_ACCOUNT, requestOptions);
    let json = await response.json();
    return json;
  } catch (error) {
    return 'oops';
  }
};

export const createmandate = async (
  paymentData: PaymentData | any,
  signature: any,
  bankDetails: any
) => {
  let requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
        'Bearer ' + (await Storage.getItem(StorageConstants.TOKEN)),
    },
    body: JSON.stringify({
      accountNumber: bankDetails.accountNumber,
      amount: bankDetails.maxAmount,
      bankId: bankDetails.bankObj.id,
      bvn: paymentData.bvn,
      customerReference: paymentData.customerReference,
      email: paymentData.email,
      endDate: paymentData.endDate,
      firstName: paymentData.firstName,
      lastName: paymentData.lastName,
      narration: paymentData.narration,
      phone: paymentData.phone,
      signature: signature,
      startDate: paymentData.startDate,
    }),
  };

  console.log('requesting ' + requestOptions.body);
  try {
    let response = await fetch(Constants.MANDATES, requestOptions);
    let json = await response.json();
    return json;
  } catch (error) {
    return 'oops';
  }
};
