import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from "./tabs";
import {navigationRef} from "./index";
import navigationTheme from "./navigationTheme";

export default () => (
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        <TabNavigator/>
    </NavigationContainer>
)
