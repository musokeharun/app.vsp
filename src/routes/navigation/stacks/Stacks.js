import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {colors} from '../../../theme'
import Home from '../../../scenes/home'
import Profile from '../../../scenes/profile'
import Details from '../../../scenes/details'
import HeaderTitle from './HeaderTitle'
import routes from "../routes";
import HeaderTitleText from "./HeaderTitleText";

// ---------
// ---------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
    headerTintColor: 'white',
    headerStyle: {backgroundColor: colors.primaryDark, elevation: 0},
    headerTitleStyle: {fontSize: 18},
    headerMode: "screen",
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
    <Stack.Navigator
        initialRouteName={"HomeScene"}
        screenOptions={navigationProps}
    >
        <Stack.Screen
            name={"HomeScene"}
            component={Home}
            options={({navigation}) => ({
                title: false,
                headerTitle: () => <HeaderTitle/>,
            })}
        />
        <Stack.Screen
            name={"HomeDetails"}
            component={Details}
            options={({navigation}) => ({
                headerLeft: () => <HeaderTitle/>,
                headerTitle: false
            })}
        />
    </Stack.Navigator>
)

export const ProfileNavigator = () => (
    <Stack.Navigator
        initialRouteName="ProfileScene"
        screenOptions={navigationProps}
    >
        <Stack.Screen
            name="ProfileScene"
            component={Profile}
            options={({navigation}) => ({
                headerTitle: () => <HeaderTitleText title={"Account"}/>,
                headerLeft: false
            })}
        />
        <Stack.Screen
            name="ProfileDetails"
            component={Details}
            options={{
                title: 'Details',
            }}
        />
    </Stack.Navigator>
)
