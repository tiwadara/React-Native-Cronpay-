import * as React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { ColorConstants } from '../constants/color_constants';

const CronPayButton = (props: any) => {
  const defaultButtonTitle = 'Maru';
  return (
    <Button
      buttonStyle={styles.button}
      disabledStyle={styles.buttonDisabled}
      disabledTitleStyle={styles.buttonDisabledText}
      loadingProps={{ animating: true }}
      loadingStyle={{}}
      onPress={props.onPress}
      disabled={props.disabled}
      loading={props.isLoading}
      title={props.title ?? defaultButtonTitle}
    />
  );
};

export default CronPayButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 15,
    elevation: 3,
    borderRadius: 30,
    backgroundColor: ColorConstants.accent,
  },
  buttonDisabled: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 15,
    elevation: 3,
    borderRadius: 30,
    backgroundColor: ColorConstants.grey,
  },
  buttonDisabledText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
