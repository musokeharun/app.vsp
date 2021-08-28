import React from 'react';
import {Card, Text} from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import {Image} from "react-native-expo-image-cache";
import {TouchableHighlight, View} from "react-native";
import {preview} from "../home/Banner";
import {SMALL_CARD_HEIGHT} from "../../utils/constants";

const SearchCard = ({handlePress, title, year, tags}) => {
    return (
        <TouchableHighlight>
            <View style={tw`flex-row py-0 px-1 mx-2 mt-2 flex-1 bg-transparent border-0`}>
                <View style={tw`rounded-md flex-1 mr-1`}>
                    <Image
                        preview={{uri: preview}}
                        resizeMethod={"scale"}
                        resizeMode={"cover"}
                        uri={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRklPguRWQrVrLpELPWYjWXT7luxMKBVDSC2sTbkbr2lDNFmYD9bjnok5o5BZ4BSo1cNdg&usqp=CAU"}
                        blurRadius={0.3}
                        tint="light"
                        style={[tw`w-full`, {height: SMALL_CARD_HEIGHT / 2, overflow: "hidden"}]}
                    />
                </View>
                <View style={tw`flex-1 px-1`}>
                    <Text style={tw`font-normal text-lg text-white`}>
                        Fantastic Four
                    </Text>
                    <Text style={tw`font-light text-sm text-gray-300`}>
                        2009
                    </Text>
                    <Text style={tw`font-light text-sm text-gray-400`} numberOfLines={2}>
                        Action,18+,Romance,Thriller
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

export default SearchCard;
