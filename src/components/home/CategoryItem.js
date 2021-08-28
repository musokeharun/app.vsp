import React from 'react';
import {TouchableWithoutFeedback, View} from "react-native";
import {Text} from "react-native-elements";
import {colors} from "../../theme";
import tw from "tailwind-react-native-classnames";

const CategoryItem = ({active = true, title = "Category", handlePress}) => {
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={tw`flex p-1 items-center`}>
                <Text style={[{
                    color: active ? colors.lightText : colors.white,
                    borderColor: colors.lightText
                }, tw`font-light pb-1 rounded-md`,
                    tw.style({
                        "border-b-4": active
                    })]}>
                    {title}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CategoryItem;