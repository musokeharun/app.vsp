import React, {useEffect, useState} from 'react';
import Screen from "../../components/common/Screen";
import tw from "tailwind-react-native-classnames";
import tailwind from "tailwind-react-native-classnames";
import {Image, StyleSheet, Text, View} from "react-native";
import {images} from "../../theme";
import * as Yup from "yup";
import Form from "../../components/forms/Form";
import {ErrorMessage, FormField, SubmitButton} from "../../components/forms";
import {navigate} from "../../routes/navigation/navigate";
import routes from "../../routes/navigation/routes";
import useApi from "../../hooks/useApi";
import userApi from "../../api/users";
import ActivityIndicator from "../../components/common/ActivityIndicator";
import AuthStorage from "../../auth/storage";

const validationSchema = Yup.object().shape({
    code: Yup.number().required().min(5).label("Code"),
});

const ConfirmAccountScreen = ({route, navigation}) => {
    const [error, setError] = useState();
    const {contact: __contact, name: __name} = route.params;
    const verifyApi = useApi(userApi.verify);
    const [name, setName] = useState(__contact);
    const [contact, setContact] = useState(__name);


    const checkForRegister = async () => {
        if (!contact || !name) {
            let {contact: _contact, name: _name} = await AuthStorage.getRegister(false);
            setContact(_contact);
            setName(_name);
        }

    };

    useEffect(() => {
        return () => {
            checkForRegister();
        }
    });

    const handleSubmit = async ({code}) => {

        if (!contact) {
            setError("No contact available");
            return;
        }

        let result = await verifyApi.request({code, contact});
        if (!result.ok) {
            if (result.data) {
                setError(result.data.error || result.data.err);
            } else {
                setError("An unexpected error occurred.");
            }
            return;
        }


        navigate(routes.CATEGORY_SELECT);
    };

    return (
        <>
            <ActivityIndicator visible={verifyApi.loading}/>
            <Screen style={tw`flex-1 py-3`}>
                <Text
                    style={tailwind`px-3 items-center font-black text-white text-left text-2xl mx-auto self-center font-bold my-5`}>
                    Confirm Your Account
                </Text>
                <Image style={[styles.logo, tw`rounded-full`]} source={images.account}/>
                <Text style={tw`text-gray-300 text-center`}>
                    {name ? name : "Welcome"}
                </Text>
                <Text style={tw`font-bold text-white text-center text-2xl`}>
                    {contact}
                </Text>
                <View style={tw`px-5 flex-1 justify-center`}>
                    <Form
                        initialValues={{code: ""}}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <ErrorMessage error={error} visible={error}/>
                        <FormField
                            autoCorrect={false}
                            keyboardType={"number-pad"}
                            icon="key"
                            name="code"
                            placeholder="VSP 00000"
                        />
                        <View style={tw`mt-4`}>
                            <SubmitButton title="Confirm"/>
                        </View>
                    </Form>
                </View>

            </Screen>
        </>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 20,
    },
});

export default ConfirmAccountScreen;