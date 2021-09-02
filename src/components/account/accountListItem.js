import React from 'react';
import {TouchableWithoutFeedback, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {colors} from "../../theme";
import {Text} from "react-native-elements";

const AccountListItem = ({icon, label, onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={tw`flex-row px-1 items-center py-3`}>
                <MaterialCommunityIcons
                    name={icon} size={24}
                    style={[tw`text-gray-200`, {backgroundColor: colors.transparent}]}/>
                <Text style={tw`text-gray-200 text-lg px-2`}>
                    {label}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AccountListItem;
