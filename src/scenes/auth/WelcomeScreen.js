import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import Button from "../../components/Button";
import routes from "../../routes/navigation/routes";
import {colors, images} from "../../theme";
import tailwind from "tailwind-rn";

function WelcomeScreen({navigation}) {
    return (
        <View
            blurRadius={10}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={images.logo_sm}/>
                <Text style={{...styles.tagline, ...tailwind('px-3 items-center')}}>Watch a new movie much easier than
                    any before</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Get Started"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                    backgroundColor={colors.primaryText}
                />
                <Button
                    title="Already have an account?Sign in"
                    color={colors.lightGrayPurple}
                    textStyle={tailwind("text-center normal-case")}
                    onPress={() => navigation.navigate(routes.LOGIN)}
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
        color: colors.white,
        textAlign: "center",
    },
});

export default WelcomeScreen;
