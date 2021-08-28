import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {colors} from '../../theme'
import tw from "tailwind-react-native-classnames";
import CategoryList from "../../components/home/CategoryList";
import Banner from "../../components/home/Banner";
import {KeyboardAvoidingView, StatusBar, View} from "react-native";
import CategoryContainer from "../../components/home/CategoryContainer";

const Home = ({navigation}) => {

    const [selectedCategory, setSelectedCategory] = useState("")

    return (
        <KeyboardAvoidingView style={[{backgroundColor: colors.primaryDark}]}>
            <StatusBar barStyle={"light-content"} backgroundColor={colors.primaryDark}/>
            <View style={tw`w-full py-0 mb-0`}>
                <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            </View>
            <Banner/>
            <CategoryContainer
                title={"New Releases"}
            />
        </KeyboardAvoidingView>
    )
}

Home.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
}

Home.defaultProps = {
    navigation: {navigate: () => null},
}

export default Home
