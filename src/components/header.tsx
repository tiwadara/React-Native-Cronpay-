import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ColorConstants } from "../constants/color_constants";
import LinearGradient from 'react-native-linear-gradient';
import { Text } from "react-native-elements";

const CronPayHeader = () => {
  return (
  // <LinearGradient
  //   colors={['#33ccff', '#ff99cc']}
  //   style={{ flex: 1 }}
  // >
    <View style={styles.header} > 
    <Text style={styles.title}>Create Mandate</Text>
    </View>
  // </LinearGradient>
  );

}

export default CronPayHeader;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    color: ColorConstants.primaryDark,
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: ColorConstants.primaryDark,
    elevation: 2
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: ColorConstants.white
  },
});

