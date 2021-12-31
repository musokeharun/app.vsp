import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Main from './navigation'
import ActivityIndicator from "../components/common/ActivityIndicator";
import {View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {colors} from "../theme";
import {authenticate} from "../slices/app.slice";
import OfflineNotice from "../components/common/OfflineNotice";

const Entrance = () => {
    const {checked, loggedIn} = useSelector((state) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authenticate({loggedIn: false, checked: true}))
    }, []);

    return (
        <View style={[tw`flex-1`, {backgroundColor: colors.primaryDark}]}>
            <OfflineNotice/>
            <ActivityIndicator visible={!checked}/>
            <Main checked={checked} loggedIn={loggedIn}/>
        </View>)
};

export default Entrance