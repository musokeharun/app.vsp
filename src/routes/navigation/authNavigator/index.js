import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import LoginScreen from "../../../scenes/auth/LoginScreen";
import RegisterScreen from "../../../scenes/auth/RegisterScreen";
import WelcomeScreen from "../../../scenes/auth/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
);

export default AuthNavigator;
