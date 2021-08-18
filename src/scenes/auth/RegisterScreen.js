import React, {useState} from "react";
import {Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text} from "react-native";
import * as Yup from "yup";
import tailwind from "tailwind-react-native-classnames";

import Screen from "../../components/Screen";
import usersApi from "../../api/users";
import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth";
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from "../../components/forms";
import useApi from "../../hooks/useApi";
import ActivityIndicator from "../../components/ActivityIndicator";
import {images} from "../../theme";
import tw from "tailwind-react-native-classnames";
import {navigate} from "../../routes/navigation/navigate";
import routes from "../../routes/navigation/routes";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {

        navigate(routes.CATEGORY_SELECT);
        return;

        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }

        const {data: authToken} = await loginApi.request(
            userInfo.email,
            userInfo.password
        );
        auth.logIn(authToken);
    };

    return (
        <KeyboardAvoidingView style={tw`flex-1`} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
                <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
                <Screen style={styles.container}>
                    <Text style={tailwind`px-8 items-center font-extrabold text-white text-center text-2xl`}>
                        Create Your New Account.
                    </Text>
                    <Image style={[styles.logo, tw`rounded-full`]} source={images.account}/>
                    <Form
                        initialValues={{name: "", email: "", password: ""}}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <ErrorMessage error={error} visible={error}/>
                        <FormField
                            autoCorrect={false}
                            icon="account"
                            name="name"
                            placeholder="Name"
                        />
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            name="email"
                            placeholder="Email"
                            textContentType="emailAddress"
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
                        <SubmitButton title="Register"/>
                    </Form>
                </Screen>
            </ScrollView>
        </KeyboardAvoidingView>
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
        marginTop: 30,
        marginBottom: 20,
    },
});

export default RegisterScreen;
