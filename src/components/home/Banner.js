import React from 'react';
import {Image} from "react-native-expo-image-cache";
import {View} from "react-native";
import {colors} from "../../theme";

export const preview = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const Banner = () => {
    let uri = "https://i1.wp.com/www.naijaolofofo.com/wp-content/uploads/2020/08/John-Wick-Chapter-3-Parabellum-2019-500x281-1.jpg?resize=500%2C281";
    return (
        <View style={{
            width: "100%", backgroundColor: colors.transparent
        }}>
            <Image
                blurRadius={0.3}
                tint="light"
                resizeMode="cover"
                preview={{uri: preview}}
                style={{width: "100%", height: 200}}
                uri={uri}/>
        </View>
    );
};

export default Banner;