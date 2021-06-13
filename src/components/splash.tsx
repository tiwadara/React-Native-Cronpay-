import * as React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { ColorConstants } from '../constants/color_constants';
import { Text } from 'react-native-elements';

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Text style={styles.loaderText}>Cronpay Initializing...</Text>
      <ActivityIndicator size="large" color={ColorConstants.white} />
    </View>
  );
};

export default Splash;

let ScreenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  splash: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: ScreenHeight,
    backgroundColor: ColorConstants.primaryDark,
  },
  loaderText: {
    fontSize: 30,
    color: ColorConstants.white,
  },
});
