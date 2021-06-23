import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type { PaymentData } from '../model/payment_data';
import { ColorConstants } from '../constants/color_constants';
import Sign from './signature_pad';

const StepTwoView = (props: any) => {
  const [signature, onSignatureSet] = useState('');
  const [paymentData, setPaymentData] = useState<PaymentData>({});

  useEffect(() => {
    setPaymentData(props.paymentData);
  }, [props.paymentData]);

  useEffect(() => {
    if (props.route.params?.signature) {
      onSignatureSet(props.route.params?.signature);
    }
  }, [props.route.params?.signature]);

  useEffect(() => {}, [signature]);

  function openSignaturePad(): void {
    props.navigation.navigate(Sign);
  }

  return (
    <View>
      <Text style={styles.text}>
        <Text style={styles.text}>
          {'Dear '}
          <Text style={styles.textBold}>
            {' '}
            {' ' +
              paymentData.firstName +
              ' ' +
              paymentData.lastName +
              ','}{' '}
          </Text>
          {
            '\nWe are creating a direct debit authorisation request on your behalf for your account with the details below :'
          }
          {'\nAccount Number :  ' + props.bankData.accountNumber}
          {'\nBank : ' + props.bankData.bankObj.name}
          {'\nMaximum Debit Amount :  NGN ' + props.bankData.maxAmount}
        </Text>
      </Text>
      <Text style={styles.textBold}> {'\nSignature'} </Text>

      <View
        style={styles.dashContainer}
        onTouchStart={() => openSignaturePad()}
      >
        {props.onSignatureReceived === null ? (
          <Text style={styles.buttonText}> Tap to sign</Text>
        ) : (
          <Image
            style={{ width: 350, height: 90, resizeMode: 'contain' }}
            source={{ uri: signature }}
          />
        )}
      </View>
    </View>
  );
};

export default StepTwoView;

const styles = StyleSheet.create({
  text: {
    color: 'grey',
    fontWeight: '100',
    fontSize: 15,
    textAlign: 'left',
    marginVertical: 20,
  },
  textBold: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'capitalize',
    textAlign: 'left',
    marginVertical: 10,
  },
  accountNameProgress: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  input: {
    height: 60,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: ColorConstants.white,
    borderWidth: 0.001,
    borderColor: ColorConstants.white,
    borderRadius: 5.0,
    shadowColor: ColorConstants.shadow,
    shadowOffset: { width: 0, height: 800 },
    shadowRadius: 200,
    elevation: 2,
  },
  dashContainer: {
    width: 350,
    height: 100,
    borderColor: ColorConstants.grey,
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '400',
    fontSize: 12,
    marginVertical: 10,
  },
});
