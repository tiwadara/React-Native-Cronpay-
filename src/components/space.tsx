import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

const CronPaySpacer = (props: any) => {
  const [height,setHeight] = useState(0);
  useEffect(()=>{
      setHeight(props.height);
  },[]);
  
  return (<View style={styles(height).space} />

  );
}

export default CronPaySpacer;

const styles = (height : any) => StyleSheet.create({
  space: {
    height: height,
  }
});

