import * as React from 'react';

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
}

const handleClose = () => {
  console.log('Clossssed');
};

const handleSent = (resp: any) => {
  console.log('Seeent!' + resp);
};
