import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorConstants } from '../constants/color_constants';

const Timeline = () => {
  return (
    <View>
      <View style={styles.progressRow}>
        <Circle />
        <Line />
        <CircleAccent />
        <Line />
        <CircleAccent />
      </View>
      <View style={styles.progressRow}>
        <Text style={styles.subtitle}>Bank Details</Text>
        <Text style={styles.subtitle}>Authorization</Text>
        <Text style={styles.subtitle}>Complete</Text>
      </View>
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  circle: {
    width: 15,
    height: 15,
    backgroundColor: ColorConstants.primaryDark,
    borderRadius: 50,
  },
  subtitle: {
    fontSize: 8,
  },
  circleAccent: {
    width: 15,
    height: 15,
    backgroundColor: ColorConstants.accent,
    borderRadius: 50,
  },
  progressRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Circle = () => {
  return <View style={styles.circle} />;
};

const CircleAccent = () => {
  return <View style={styles.circleAccent} />;
};

const Line = () => {
  return (
    <View
      style={{
        flexGrow: 1,
        borderBottomColor: ColorConstants.shadow,
        borderBottomWidth: 2,
        alignSelf: 'center',
        alignContent: 'center',
      }}
    />
  );
};
