import React, {useEffect} from 'react';
import {FlatList, View} from "react-native";
import CategoryItem from "./CategoryItem";
import tw from "tailwind-react-native-classnames";
import {} from "expo-constants";

const CategoryList = ({selectedCategory, setSelectedCategory}) => {

    const data = [
        {
            "id": "ksjhss",
            "title": "Featured"
        }, {
            "id": "jshsjs",
            "title": "WWE"
        }, {
            "id": "ksjias",
            "title": "Movies"
        }, {
            "id": "osioas",
            "title": "Comedy"
        }, {
            "id": "jshsuhw",
            "title": "Series"
        }, {
            "id": "gshshs",
            "title": "Originals"
        }, {
            "id": "hsjsiuw",
            "title": "Tv Shows"
        },
    ];

    const renderItem = ({item}) => {
        return (
            <View style={tw`pl-3 pr-4`}>
                <CategoryItem
                    title={item.title}
                    active={item.id === selectedCategory}
                    handlePress={() => setSelectedCategory(item.id)}
                />
            </View>)
    };

    useEffect(() => {
        if (data.length)
            setSelectedCategory(data[0].id)
    }, [])

    return (
        <FlatList
            style={[tw`w-full m-0`]}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedCategory}
        />
    );
};

export default CategoryList;