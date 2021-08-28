import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppNavigator from "./tabs";
import navigationTheme from "./navigationTheme";
import AuthNavigator from "./authNavigator";
import {navigationRef} from "./navigate";

export default ({loggedIn}) => (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {loggedIn ? <AppNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
)
