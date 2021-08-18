import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
import {Button} from "react-native-elements";
import routes from "../../routes/navigation/routes";
import {colors, images} from "../../theme";
import tailwind from "tailwind-react-native-classnames";

function WelcomeScreen({navigation}) {
    return (
        <View
            blurRadius={10}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={images.logo_sm}/>
                <Text style={tailwind`px-3 mt-5 items-center font-extrabold text-white text-center text-2xl`}>
                    Access and Watch movies much easier than any before
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    buttonStyle={{
                        backgroundColor: colors.lightText,
                        ...tailwind`py-4 px-8 mx-4 rounded-xl`
                    }}
                    titleStyle={{
                        color: colors.white,
                        ...tailwind`text-center`
                    }}
                    title="Get Started"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
                <Button
                    title="Already have an account? Sign in"
                    titleStyle={{
                        color: colors.lightGrayPurple
                    }}
                    buttonStyle={tailwind`bg-transparent py-4 my-4`}
                    textStyle={tailwind`text-center normal-case`}
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
        width: 200,
        height: 150,
    },
    logoContainer: {
        position: "absolute",
        top: 30,
        alignItems: "center",
    },
});

export default WelcomeScreen;
