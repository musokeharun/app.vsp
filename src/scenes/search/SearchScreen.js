import React, {useState} from 'react';
import tw from "tailwind-react-native-classnames";
import Screen from "../../components/Screen";
import HeaderTitleText from "../../routes/navigation/stacks/HeaderTitleText";
import {SearchBar, Text} from "react-native-elements";
import {colors} from "../../theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {ScrollView} from "react-native";
import SearchCard from "../../components/Cards/SearchCard";

const SearchScreen = () => {
    const [query, setQuery] = useState("");


    return (
        <Screen style={tw`flex-1`}>
            <HeaderTitleText style={tw`py-2 font-light`} title={"Search"}/>
            <SearchBar
                showLoading
                value={query}
                onChangeText={setQuery}
                containerStyle={tw`border-0 w-full mt-2 p-0 bg-transparent`}
                inputStyle={tw`border-0 text-white`}
                inputContainerStyle={[tw`border-0 px-3`, {backgroundColor: "#2C2D31"}]}
                placeholder='Search title, category ,year etc'
            />
            <Text style={tw`text-white px-3 py-2`}>
                Results
            </Text>
            <ScrollView>
                <SearchCard/>
            </ScrollView>
        </Screen>
    );
};

export default SearchScreen;