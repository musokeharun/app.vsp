import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import LoginScreen from "../../../scenes/auth/LoginScreen";
import RegisterScreen from "../../../scenes/auth/RegisterScreen";
import WelcomeScreen from "../../../scenes/auth/WelcomeScreen";
import CategorySelectorScreen from "../../../scenes/auth/CategorySelectorScreen";
import ConfirmAccountScreen from "../../../scenes/auth/ConfirmAccountScreen";

const Stack = createStackNavigator();
const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
}
const AuthNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false, ...TransitionScreenOptions}}>
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="CategorySelect" component={CategorySelectorScreen}/>
        <Stack.Screen name={"ConfirmAccount"} component={ConfirmAccountScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;
