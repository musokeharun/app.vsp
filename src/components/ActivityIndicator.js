import React from "react";
import LottieView from "lottie-react-native";
import {View, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

function ActivityIndicator({visible = false}) {
    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <StatusBar style={"auto"}/>
            <LottieView
                autoPlay
                loop
                source={require("../../assets/animations/loader.json")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        backgroundColor: "white",
        height: "100%",
        opacity: 0.8,
        width: "100%",
        zIndex: 1,
    },
});

export default ActivityIndicator;
