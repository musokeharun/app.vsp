import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import {colors} from '../../../theme'
import {HomeNavigator, ProfileNavigator} from '../stacks'
import tw from "tailwind-react-native-classnames";
import LibraryScene from "../../../scenes/library";
import SearchScreen from "../../../scenes/search";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Screen from "../../../components/common/Screen";
import HeaderTitle from "../stacks/HeaderTitle";
import HeaderTitleText from "../stacks/HeaderTitleText";
import {View} from "react-native";

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export const LibraryTopBar = () => {
    return (
        <Screen style={tw`py-0 my-0`}>
            <TopTab.Navigator
                initialRouteName={"LibraryList"}
                backBehavior={"none"}
                screenOptions={{
                    tabBarStyle: [tw`justify-center py-0`, {backgroundColor: colors.white}],
                    tabBarLabelStyle: tw`text-white normal-case`,
                    tabBarItemStyle: {width: 100},
                    tabBarIndicatorStyle: tw`mx-3`,
                    tabBarContentContainerStyle : tw`my-0 py-0`
                }}
            >
                <TopTab.Screen options={{
                    tabBarLabel: "List"
                }} name="LibraryList" component={LibraryScene}/>
                <TopTab.Screen
                    options={{
                        tabBarLabel: "Downloads"
                    }} name="LibraryDownloads" component={LibraryScene}/>
            </TopTab.Navigator>
        </Screen>
    );
}


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
        initialRouteName={"TAB_SEARCH"}
        swipeEnabled={false}
    >
        <Tab.Screen
            name={"TAB_HOME"}
            component={HomeNavigator} options={{
            tabBarIcon: ({color, size}) => <FontIcon name={"home"} size={size} color={color}/>
        }}
        />
        <Tab.Screen
            name={"TAB_SEARCH"}
            component={SearchScreen}
            options={{
                tabBarIcon: ({color, size}) => <FontIcon name={"search"} size={size} color={color}/>,
            }}
        />
        <Tab.Screen
            name={"TAB_LIBRARY"}
            component={LibraryTopBar}
            options={{
                tabBarIcon: ({color, size}) => <FontIcon name={"folder"} size={size} color={color}/>,
                headerTitle: () => <HeaderTitleText style={tw`py-0 my-0`} title={"Library"}/>,
                headerShown: true,
                headerBackground: () => <View style={{backgroundColor: colors.primaryDark}}/>,
                headerBackgroundContainerStyle: tw`py-0 my-0`,
                headerTitleContainerStyle: tw`py-0`
            }}
        />
        <Tab.Screen
            name={"TAB_PROFILE"}
            component={ProfileNavigator}
            options={{
                tabBarIcon: ({color, size}) => <FontIcon name={"user-tie"} size={size} color={color}/>
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator
