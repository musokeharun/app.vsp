import React, {useState} from 'react';
import tw from "tailwind-react-native-classnames";
import {View} from "react-native";
import SearchCard from "../../components/Cards/SearchCard";
import PlaceholderScreen from "../../components/all/PlaceholderScreen";

const LibraryScene = () => {

        const [list, setList] = useState([]);

        return (
            <View style={tw`flex-1`}>
                {
                    !!list.length ? <SearchCard/> :
                        <PlaceholderScreen
                            title={"Create you own"}
                            btnTitle={"Explore Movies"}
                            handleBtnPress={() => setList(list.concat({h: 1}))}
                            subTitle={"Add a few movies, genres or categories to feature on you list."}
                            image={require("../../../assets/animations/library.json")}
                        />
                }
            </View>
        );
    }
;

export default LibraryScene;