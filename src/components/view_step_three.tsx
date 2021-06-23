import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const StepThreeView = () => {
  return (
    <View>
      <Image
        style={styles.icon}
        source={require('../asset/success-icon.png')}
      />
      <Text style={styles.title}>{'THANK YOU'}</Text>
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
    textAlign: 'center',
    marginVertical: 10,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  accountNameProgress: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
