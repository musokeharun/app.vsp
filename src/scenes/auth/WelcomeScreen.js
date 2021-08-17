import React from "react";
import {ImageBackground, StyleSheet, View, Image, Text} from "react-native";

import Button from "../../components/Button";
import routes from "../../routes/navigation/routes";
import {colors, images} from "../../theme";

function WelcomeScreen({navigation}) {
    return (
        <View
            blurRadius={10}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={images.logo_sm}/>
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <Button
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: colors.primaryDark
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;
