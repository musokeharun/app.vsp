import React from 'react';
import {View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {colors} from "../../theme";
import {Text} from "react-native-elements";

const HeaderAccount = () => {

    return (
        <View style={tw`flex-row px-1 py-3`}>
            <View style={[tw`rounded-sm justify-center items-center mr-2`, {
                width: 80,
                height: 60,
                backgroundColor: colors.primaryText
            }]}>
                <Text h1 style={tw`font-bold`}>
                    A
                </Text>
            </View>
            <View style={tw`justify-center text-center`}>
                <Text style={tw`font-normal text-white text-lg`} numberOfLines={1}>
                    Username Othername
                </Text>
                <Text style={tw`font-normal text-white text-base`}>
                    0772 567 987
                </Text>
            </View>
        </View>
    );
};

export default HeaderAccount;
