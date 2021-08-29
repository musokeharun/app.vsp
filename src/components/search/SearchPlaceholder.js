import React from 'react';
import {View} from "react-native";
import tw from "tailwind-react-native-classnames";
import LottieView from "lottie-react-native";
import {Text} from "react-native-elements";

const SearchPlaceHolder = () => {
    return (
        <View style={tw`flex-1 justify-start items-center`}>
            <LottieView
                style={{width: 150}}
                autoPlay
                loop
                source={require("../../../assets/animations/search.json")}
            />
            <View>
                <Text style={tw`text-white text-center text-lg font-bold`}>
                    Search any Movie
                </Text>
                <Text style={tw`text-center text-sm text-gray-300 px-3`}>
                    Explore our libraries and enjoy the content filtered to your needs
                </Text>
            </View>
        </View>
    );
};

export default SearchPlaceHolder;
