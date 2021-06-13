import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import CronPayView from 'react-native-cronpay';

export default class MainPage extends React.Component {
  render() {
    return (
      <CronPayView 
      onClose={handleClose}
      onMandateCreated={(resp: any) => handleSent(resp)}
      />
    );
  }
};

const handleClose = () => {
  console.log('Clossssed');
}

const handleSent = (resp: any) => {
  console.log('Seeent!' +resp);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
