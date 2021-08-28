import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import {colors} from '../../../theme'
import {HomeNavigator, ProfileNavigator} from '../stacks'
import tw from "tailwind-react-native-classnames";
import LibraryScene from "../../../scenes/library";
import SearchScreen from "../../../scenes/search";

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={({route}) => ({
            headerShown: false,
            tabBarActiveTintColor: colors.lightText,
            tabBarShowLabel: false,
            tabBarStyle: [tw`m-0 border-0`, {elevation: 0}],
            tabBarInactiveTintColor: colors.white,
            tabBarInactiveBackgroundColor: colors.primaryDark,
            tabBarActiveBackgroundColor: colors.primaryDark,
        })}
        initialRouteName="Home"
        swipeEnabled={false}
    >
        <Tab.Screen
            name="Home"
            component={HomeNavigator} options={{
            tabBarIcon: ({color, size}) => <FontIcon name={"home"} size={size} color={color}/>
        }}
        />
        <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
                tabBarIcon: ({color, size}) => <FontIcon name={"search"} size={size} color={color}/>
            }}
        />
        <Tab.Screen
            name="Library"
            component={LibraryScene}
            options={{
                tabBarIcon: ({color, size}) => <FontIcon name={"folder"} size={size} color={color}/>
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileNavigator}
            options={{
                tabBarIcon: ({color, size}) => <FontIcon name={"user-tie"} size={size} color={color}/>
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator
