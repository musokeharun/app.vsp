import React from 'react';
import {View} from "react-native";
import tw from "tailwind-react-native-classnames";
import LottieView from "lottie-react-native";
import {Button, Text} from "react-native-elements";

const PlaceholderScreen = ({title, subTitle, image, btnTitle, handleBtnPress}) => {
    return (
        <View style={tw`flex-1 justify-between`}>
            <View style={tw`items-center`}>
                <LottieView
                    style={{width: 150}}
                    autoPlay
                    loop
                    source={image}
                />
                <View>
                    <Text style={tw`text-white text-center text-lg font-bold`}>
                        {title}
                    </Text>
                    <Text style={tw`text-center text-sm text-gray-300 px-3`}>
                        {subTitle}
                    </Text>
                </View>
            </View>
            {
                !!btnTitle && !!handleBtnPress &&
                <Button onPress={handleBtnPress}
                        title={btnTitle}
                        containerStyle={tw`mb-5 mx-3`}
                        style={tw`w-full flex-1`}/>
            }
        </View>
    );
};

export default PlaceholderScreen;
