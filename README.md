# react-native-cronpay

Payment

## Installation

```sh
npm install react-native-cronpay
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
