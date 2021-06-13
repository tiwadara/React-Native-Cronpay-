import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const CronPaySpacer = (props: any) => {
  return <View style={styles(props.height).space} />;
};

export default CronPaySpacer;

const styles = (height: any) =>
  StyleSheet.create({
    space: {
      height: height,
    },
  });
