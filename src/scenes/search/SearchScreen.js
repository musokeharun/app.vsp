import React, {useState} from 'react';
import tw from "tailwind-react-native-classnames";
import Screen from "../../components/common/Screen";
import HeaderTitleText from "../../routes/navigation/stacks/HeaderTitleText";
import {SearchBar, Text} from "react-native-elements";
import {ScrollView} from "react-native";
import SearchCard from "../../components/Cards/SearchCard";
import PlaceholderScreen from "../../components/common/PlaceholderScreen";

const SearchScreen = () => {
        const [query, setQuery] = useState("");
        const [results, setResults] = useState([]);

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
                {/*TODO DEV MODEL CHANGE TO RESULTS NOT TEXT*/}
                {!query.length ?
                    <PlaceholderScreen image={require("../../../assets/animations/search.json")}
                                       title={"Search any Movie"}
                                       subTitle={"Explore our libraries and enjoy the content filtered to your needs"}/> :
                    <ScrollView>
                        <SearchCard/>
                    </ScrollView>
                }
            </Screen>
        );
    }
;

export default SearchScreen;