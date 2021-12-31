import React, {useState} from "react";
import {Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text} from "react-native";
import * as Yup from "yup";
import tailwind from "tailwind-react-native-classnames";
import Screen from "../../components/common/Screen";
import {
    ErrorMessage,
    Form,
    FormField,
    SubmitButton,
} from "../../components/forms";
import useApi from "../../hooks/useApi";
import ActivityIndicator from "../../components/common/ActivityIndicator";
import {images} from "../../theme";
import tw from "tailwind-react-native-classnames";
import userApi from "../../api/users";
import {navigate} from "../../routes/navigation/navigate";
import routes from "../../routes/navigation/routes";
import {Button} from "react-native-elements";
import AuthStorage from "../../auth/storage";
import logger from "../../utils/logger";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    contact: Yup.string().min(9).required().label("Phone Number"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
    const registerApi = useApi(userApi.register);
    const [error, setError] = useState();
    const [info, setInfo] = useState();

    const handleSubmit = async ({name, contact, password}) => {

        setInfo("");
        setError("");
        const result = await registerApi.request({name, contact, password});

        if (!result.ok) {
            if (result.data) {
                setError(result.data.error || result.data.err);
            } else {
                setError("An unexpected error occurred.");
                console.log(result);
            }
            return;
        }
        // CACHE PHONE NUMBER
        await AuthStorage.storeRegister({name, password, contact});

        logger.log(result.data, result.status);
        setInfo(result.data.msg);
        navigate(routes.CONFIRM_ACCOUNT, {
            contact, name
        });
    };

    return (
        <KeyboardAvoidingView style={tw`flex-1`} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
                <ActivityIndicator visible={registerApi.loading}/>
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
                        <ErrorMessage error={info} visible={info} style={tw`text-green-500`}/>
                        <FormField
                            autoCorrect={false}
                            icon="account"
                            name="name"
                            placeholder="Name"
                        />
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="phone"
                            keyboardType="phone-pad"
                            name="contact"
                            placeholder="Phone Number"
                            textContentType="telephoneNumber"
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
                        <Button onPress={e => navigate(routes.CONFIRM_ACCOUNT)} title={"Verify Account"}
                                buttonStyle={tw`bg-transparent my-2`}/>
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