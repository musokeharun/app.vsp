import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {authenticate} from '../slices/app.slice'
import Main from './navigation'
import ActivityIndicator from "../components/common/ActivityIndicator";
import {View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {colors} from "../theme";

const Routes = () => {
    const {checked, loggedIn} = useSelector((state) => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authenticate({loggedIn: true, checked: true}))
    }, [])

    // TODO: switch router by loggedIn state
    console.log('[##] loggedIn', loggedIn)

    // rendering
    return (
        <View style={[tw`flex-1`, {backgroundColor: colors.primaryDark}]}>
            <ActivityIndicator visible={!checked}/>
            <Main checked={checked} loggedIn={loggedIn}/>
        </View>)
}

export default Routes
