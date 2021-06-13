import DropDownPicker from 'react-native-dropdown-picker';
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
  
      <DropDownPicker>

      </DropDownPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default Dropdown;