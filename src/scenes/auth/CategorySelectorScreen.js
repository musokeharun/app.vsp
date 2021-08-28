import React from 'react';
import {FlatList, ScrollView, Text, TouchableWithoutFeedback, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import tailwind from "tailwind-react-native-classnames";
import Screen from "../../components/common/Screen";
import CheckButton from "../../components/common/CheckButton";
import {Button} from "react-native-elements";
import Icon from "../../components/common/Icon";
import {colors} from "../../theme";
import {useDispatch} from "react-redux";
import {authenticate} from "../../slices/app.slice";

const CategorySelectorScreen = () => {
    const dispatch = useDispatch();

    const categories = [
        {
            name: "category",
            value: "1",
            title: "Movies"
        },
        {
            name: "category",
            value: "2",
            title: "Comedy"
        }, {
            name: "category",
            value: "3",
            title: "Music"
        }, {
            name: "category",
            value: "4",
            title: "Series"
        },
        {
            name: "category",
            value: "5",
            title: "Ugandan Movies"
        }
    ]

    const renderItem = ({item}) => <View style={[tw`w-1/2 mr-2`, {width: "48%"}]}>
        <CheckButton title={item.title}
                     name={item.name}
                     value={item.value}/>
    </View>;

    const handleSubmit = () => {
        dispatch(authenticate({loggedIn: true}))
    }
    return (
        <Screen style={tw`flex-1`}>
            <ScrollView style={tw`flex-1`}>
                <FlatList horizontal={false}
                          numColumns={2}
                          data={categories}
                          style={tw`flex-1 py-4 px-2`}
                          columnWrapperStyle={{justifyContent: 'flex-start', marginBottom: 8}}
                          renderItem={renderItem}
                          ListHeaderComponent={() => (
                              <Text
                                  style={tailwind`px-3 items-center font-black text-white text-left text-2xl w-2/3 py-3`}>
                                  Select Your Favourite Category
                              </Text>)}
                          keyExtractor={item => item.value}/>


                <FlatList horizontal={false}
                          numColumns={2}
                          data={categories}
                          style={tw`flex-1 py-4 px-2`}
                          columnWrapperStyle={{justifyContent: 'flex-start', marginBottom: 8}}
                          renderItem={renderItem}
                          ListHeaderComponent={() => (
                              <Text
                                  style={tailwind`px-3 items-center font-black text-white text-left text-2xl w-2/3 py-3`}>
                                  Select Your Favourite Genre
                              </Text>)}
                          ListFooterComponent={() => (
                              <Button
                                  onPress={handleSubmit}
                                  buttonStyle={tw`self-center rounded-full my-5`}
                                  icon={
                                      <Icon
                                          name={"arrow-right"}
                                          size={56}
                                          backgroundColor={colors.transparent}
                                          iconColor={colors.white}/>
                                  }
                              />)}
                          keyExtractor={item => item.value}/>
            </ScrollView>
        </Screen>
    );
};

export default CategorySelectorScreen;
