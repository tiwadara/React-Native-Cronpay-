import * as React from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import { ColorConstants } from "../constants/color_constants";
import LinearGradient from 'react-native-linear-gradient'; 
import { Text } from "react-native-elements";

const Splash = () => {
    return (
        // <LinearGradient
        //   colors={['#33ccff', '#ff99cc']}
        //   style={{ flex: 1 }}
        // > 
            <View style={styles.splash} >
                <Text style={styles.loaderText} >Cronpay Initializing...</Text>
                <ActivityIndicator size="large" color={ColorConstants.white} /> 
            </View> 

        // </LinearGradient>
    );

}

export default Splash;

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    splash: {
        justifyContent: 'center',
        // alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: ScreenHeight,
        backgroundColor: ColorConstants.primaryDark,
    },
    loaderText: {
        fontSize: 30,
        color: ColorConstants.white,
    },
});

