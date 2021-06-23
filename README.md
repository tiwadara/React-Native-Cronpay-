# react-native-cronpay

Payment

## Installation

```sh
npm install react-native-cronpay
```

## Dependencies

```sh
npm install react-native-cronpay
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-native-async-storage/async-storage
npm install react-native-webview
```

## Usage

```js
import CronPayView from "react-native-cronpay";

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
