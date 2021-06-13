import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorConstants } from '../constants/color_constants';

const StepThreeView = () => {
  return (
    <View>
      <Text style={styles.text}>
        <Text style={styles.text}>
          {'\n We are creat ur account with the details below :'}
          {'\nAccount Number :  '}
        </Text>
      </Text>
      <Text style={styles.text}>
        <Text style={styles.text}>
          {'We have sent your request and you will be notified upon approval'}
        </Text>
      </Text>
    </View>
  );
};

export default StepThreeView;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: '400',
    fontSize: 14,
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
