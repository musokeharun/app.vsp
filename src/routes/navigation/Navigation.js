import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from "./tabs";
import navigationTheme from "./navigationTheme";
import AuthNavigator from "./authNavigator";
import {navigationRef} from "./navigate";

export default ({checked, loggedIn}) => (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {loggedIn ? <TabNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
)
