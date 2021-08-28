import React from 'react';
import {Badge, Card, Text} from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import {Image} from "react-native-expo-image-cache";
import {preview} from "../home/Banner";
import {LARGE_CARD_HEIGHT, LARGE_CARD_WIDTH, SMALL_CARD_HEIGHT, SMALL_CARD_WIDTH} from "../../utils/constants";
import {View} from "react-native";
import styles from "../../config/styles";
import {BlurView} from "expo-blur";

const VodCard = ({height = LARGE_CARD_HEIGHT, width = LARGE_CARD_WIDTH, badgeTop, title}) => {
    return (
        <View>
            <Card
                wrapperStyle={tw`bg-white`}
                containerStyle={[tw`bg-transparent border-0 bg-white p-0 my-1 mx-0 rounded-md overflow-hidden`]}>
                <Image
                    preview={{uri: preview}}
                    resizeMethod={"scale"}
                    resizeMode={"cover"}
                    uri={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklPguRWQrVrLpELPWYjWXT7luxMKBVDSC2sTbkbr2lDNFmYD9bjnok5o5BZ4BSo1cNdg&usqp=CAU"}
                    blurRadius={0.3}
                    tint="light"
                    style={{width: width, height: height, overflow: "hidden"}}
                />
                {
                    badgeTop &&
                    <View style={tw`absolute right-1 top-1`}>
                        <Badge value="8.0" status="primary" badgeStyle={tw`rounded-sm`}/>
                    </View>
                }
                <BlurView intensity={30} tint="dark" style={tw`absolute px-2 pb-1 w-full bottom-0 flex-col`}>
                    <Text style={[styles.text, tw`text-base font-bold`]}>
                        {title}
                    </Text>
                    <View style={tw`flex-row justify-start`}>
                        <Badge value="HD" status="warning" badgeStyle={tw`rounded-sm`} textStyle={tw`text-black`}/>
                        <Text style={tw`text-white px-2`}>
                            2020
                        </Text>
                        <Text style={tw`text-white`}>
                            17+
                        </Text>
                    </View>
                </BlurView>
            </Card>
            <View style={[tw`bg-transparent`,{width : width}]}>
                <Text style={tw`text-white font-bold`} numberOfLines={1}>
                    SpiderMan-3 Rise of Honor
                </Text>
                <Text style={tw`text-white font-normal text-xs`} numberOfLines={1}>
                    Meet Howard in the new SpiderMan,in this fall
                </Text>
            </View>
        </View>
    );
};

export default VodCard;