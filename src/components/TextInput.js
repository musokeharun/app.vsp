import React from "react";
import {View, TextInput, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import tw from "tailwind-react-native-classnames";

function AppTextInput({icon, width = "100%", ...otherProps}) {
    return (
        <View style={[styles.container, {width}, tw`rounded-lg items-center`]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.primaryDark}
                    style={[styles.icon, tw`self-center`]}
                />
            )}
            <TextInput
                placeholderTextColor={defaultStyles.colors.primaryDark}
                style={{...defaultStyles.text, ...tw`bg-white text-black`}}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
});

export default AppTextInput;
