
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import SignatureScreen, { SignatureViewRef } from 'react-native-signature-canvas';
import Signature from 'react-native-signature-canvas';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ColorConstants } from '../constants/color_constants';

const Sign = ({navigation, route}) => {
  const ref = useRef<SignatureViewRef>(null);

  const handleSignature = (signature: any) => {
    navigation.navigate({
      name: 'Home',
      params: { signature: signature },
      merge: true,
    });
  };

  const handleEmpty = () => {
    console.log('Empty');
  }

  const handleClear = () => {
    console.log('clear success!');
  }

  const handleEnd = () => { 
  }

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;

  return (
    <View style={styles.container}>
  <Signature
        ref={ref}
        onEnd={handleEnd}
        onOK={handleSignature}
        onEmpty={handleEmpty}
        onClear={handleClear}
        descriptionText="Rotate and Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
        trimWhitespace ={true}
        backgroundColor={'transparent'}
    />
    </View>
  );
}

export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    padding: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  }
});