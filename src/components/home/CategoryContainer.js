import React from 'react';
import {TouchableHighlight, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {Text} from "react-native-elements";
import VodCard from "../Cards/VodCard";

const CategoryContainer = ({title, handleMorePress}) => {
    return (
        <View style={tw`w-full px-3 pt-3 pb-2 items-start`}>
            <View style={tw`w-full justify-between items-center flex-row`}>
                <Text style={tw`font-bold text-lg text-white`}>
                    {title}
                </Text>
                {
                    handleMorePress &&
                    <TouchableHighlight>
                        <Text style={tw`font-thin text-gray-100`}>
                            More
                        </Text>
                    </TouchableHighlight>
                }
            </View>
            <VodCard badgeTop={8.2} title={"Spider Man 3"}/>
        </View>
    );
};

export default CategoryContainer;