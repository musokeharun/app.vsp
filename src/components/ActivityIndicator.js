import React from "react";
import LottieView from "lottie-react-native";
import {View, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import tw from "tailwind-react-native-classnames";

function ActivityIndicator({visible = false, text = ""}) {
    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <StatusBar style={"auto"}/>
            <LottieView
                autoPlay
                loop
                source={require("../../assets/animations/loader.json")}
            />
            {
                !!text &&
                <Text
                    style={tw`text-center text-gray-50`}>
                    {text}
                </Text>
            }
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
