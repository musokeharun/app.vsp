import React from 'react';
import tw from "tailwind-react-native-classnames";
import {View} from "react-native";
import SearchCard from "../../components/Cards/SearchCard";

const LibraryScene = () => {
    return (
        <View style={tw`flex-1`}>
            <SearchCard/>
        </View>
    );
};

export default LibraryScene;