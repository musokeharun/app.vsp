import React from 'react'
import {View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import {colors} from '../../../theme'

// stack navigators
import {HomeNavigator, ProfileNavigator} from '../stacks'
import tw from "tailwind-react-native-classnames";

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({route}) => ({
            // eslint-disable-next-line react/prop-types
            tabBarIcon: ({focused}) => {
                switch (route.name) {
                    case 'Home':
                        return (
                            <FontIcon
                                name="home"
                                color={focused ? colors.lightText : colors.gray}
                                size={20}
                                solid
                                style={tw`px-3`}
                            />
                        )
                    case 'Profile':
                        return (
                            <FontIcon
                                name="user"
                                color={focused ? colors.lightText : colors.gray}
                                size={20}
                                solid
                                style={tw`px-3`}
                            />
                        )
                    default:
                        return <View/>
                }
            },
            headerShown: false
        })}
        tabBarOptions={{
            activeTintColor: colors.lightText,
            inactiveTintColor: colors.gray,
            style: {
                position: "absolute",
                backgroundColor: '#00000000',
                borderTopColor: 'gray',
                borderTopWidth: 1,
                paddingBottom: 5,
                paddingTop: 5,
                elevation: 0,
                height: 60
            },
            tabBarShowLabel: false,
            showLabel : false
        }}
        initialRouteName="Home"
        swipeEnabled={false}
    >
        <Tab.Screen name="Home" component={HomeNavigator}/>
        <Tab.Screen name="Profile" component={ProfileNavigator}/>
    </Tab.Navigator>
)

export default TabNavigator
