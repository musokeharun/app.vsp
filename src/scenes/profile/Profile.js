import React from 'react'
import PropTypes from 'prop-types'
import {FlatList, StatusBar, StyleSheet, View,} from 'react-native'
import {colors} from '../../theme'
import HeaderAccount from "../../components/account/headerAccount";
import {ListItemSeparator} from "../../components/lists";
import Icon from "../../components/common/Icon";
import AccountListItem from "../../components/account/accountListItem";
import routes from "../../routes/navigation/routes";
import {Button} from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import {openInBrowser} from "../../utils/share";
import useAuth from "../../auth/useAuth";

const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.primaryDark,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    container: {
        marginVertical: 20,
    },
})

const Profile = ({navigation}) => {
    const menuItems = [
        {
            title: "Inbox",
            icon: "email",
            targetScreen: routes.MESSAGES,
        }, {
            title: "Account Settings",
            icon: "account",
            targetScreen: routes.MESSAGES,
        }, {
            title: "Rate us",
            icon: "thumb-up",
            targetScreen: routes.MESSAGES,
        }, {
            title: "Help",
            icon: "help",
            targetScreen: routes.MESSAGES,
        }
    ];
    return (
        <View style={[tw`flex-1 px-3`, styles.root]}>
            <StatusBar barStyle="default" backgroundColor={colors.primaryDark}/>
            <HeaderAccount/>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => (
                        <AccountListItem
                            label={item.title}
                            icon={item.icon}
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    )}
                />
            </View>
            <Button buttonStyle={tw`bg-transparent justify-start`} titleStyle={tw`text-gray-500`}
                    title={"Terms and Conditions"} onPress={openInBrowser}/>
            <Button buttonStyle={tw`bg-transparent justify-start`} titleStyle={tw`text-gray-500`}
                    title={"Privacy Policy"} onPress={openInBrowser}/>
            <Button
                title="Log Out"
                buttonStyle={tw`bg-transparent justify-start`} titleStyle={tw`text-red-500`}
                icon={<Icon name="logout" backgroundColor={colors.transparent}/>}
                onPress={useAuth().logOut}
            />
        </View>
    )
}

Profile.propTypes = {
    navigation: PropTypes.shape({navigate: PropTypes.func}),
}

Profile.defaultProps = {
    navigation: {navigate: () => null},
}

export default Profile
