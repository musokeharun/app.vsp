import React from 'react';
import {Image, View} from 'react-native';
import tw from "tailwind-react-native-classnames";

const IconImage = () => {
    return (
        <View style={tw`flex-1`}>
            <Image
                source={require('./assets/images/slack-icon.png')}
                fadeDuration={0}
                style={{width: 50, height: 50}}
            />
        </View>
    );
};

export default IconImage;