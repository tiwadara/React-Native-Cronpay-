import * as React from 'react';

import CronPayView from 'react-native-cronpay';

export default class MainPage extends React.Component {
  render() {
    return (
      <CronPayView
        apiKey="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJnZ2ciLCJsYXN0TmFtZSI6ImdnZ2ciLCJpZCI6IjMiLCJleHAiOjE2NTM1NDU4OTYsImVtYWlsIjoidGVld2FoMjRAZ21haWwuY29tIiwianRpIjoiY2FiODgwNjUtNDBiNS00YTI0LWIwZWItMDdhYWY4NmQ2MjhiIiwiY2xpZW50X2lkIjoiY2xpZW50SWQifQ.L-Cd5BDbPxr_JTnmrEVoZCI9Zwd9__3tenm2_owo4FiLLKQyzpFncWVTAXUdX2Q5nYevhk5071d5H2dtHboXxLL-bTja2zL46GwlkO9qZIrfPji79X7ADszOGwB8mIxpGQuZgh1Pe0IN_XVLjP_lcsC4d1gphLffgCj2qOwcJ7s"
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
  console.log('mandate created' + JSON.stringify(resp));
};
