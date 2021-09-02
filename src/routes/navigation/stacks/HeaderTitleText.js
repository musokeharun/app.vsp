import React from 'react';
import {Text} from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import {colors} from "../../../theme";

const HeaderTitleText = ({title,style}) => {
    return (
        <Text h4 style={[tw`text-white font-normal bg-white px-2`, {backgroundColor: colors.primaryDark},style]}>
            {title}
        </Text>
    );
};

export default HeaderTitleText;
