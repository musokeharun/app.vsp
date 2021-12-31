import React, {useState} from "react";
import {StyleSheet, Image, Text, View} from "react-native";
import tailwind from "tailwind-react-native-classnames";
import * as Yup from "yup";
import Screen from "../../components/common/Screen";
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from "../../components/forms";
import useAuth from "../../auth/useAuth";
import {authenticate} from "../../slices/app.slice";
import {images} from "../../theme";
import tw from "tailwind-react-native-classnames";
import {Button} from "react-native-elements";
import {navigate} from "../../routes/navigation/navigate";
import routes from "../../routes/navigation/routes";
import {useDispatch} from "react-redux";
import authApi from "../../api/auth";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
    const auth = useAuth();
    const dispatch = useDispatch();
    const [loginFailed, setLoginFailed] = useState(false);
    const handleSubmit = async ({contact, password}) => {
        const result = await authApi.login({});
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        auth.logIn(result.data);
    };

    const forgotPassword = () => {
        return;
        navigate(routes.FORGOT_PASSWORD);
    };

    return (
        <>
            <Screen style={styles.container}>
                <Image style={styles.logo} source={images.logo_sm}/>
                <Text style={tailwind`px-3 items-center font-extrabold text-white text-left text-2xl`}>
                    Welcome Back
                </Text>
                <Form
                    initialValues={{email: "", password: ""}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage
                        error="Invalid email and/or password."
                        visible={loginFailed}
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="phone"
                        keyboardType="phone"
                        name="contact"
                        placeholder="Phone Number"
                        textContentType="number"
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <Button
                        titleStyle={tw`text-red-200 text-right font-thin`}
                        buttonStyle={tw`bg-transparent flex-row justify-end`}
                        title={"Forgot Password?"}
                    />
                    <View style={tw`mt-6 flex-1`}>
                        <SubmitButton title="Login"/>
                    </View>
                </Form>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

export default LoginScreen;