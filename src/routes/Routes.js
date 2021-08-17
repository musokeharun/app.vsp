import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {authenticate} from '../slices/app.slice'
import Main from './navigation'
import ActivityIndicator from "../components/ActivityIndicator";

const Routes = () => {
    const {checked, loggedIn} = useSelector((state) => state.app)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authenticate({loggedIn: false, checked: true}))
    }, [])

    // TODO: switch router by loggedIn state
    console.log('[##] loggedIn', loggedIn)

    // rendering
    if (!checked) return <ActivityIndicator visible={true}/>
    return <Main checked={checked} loggedIn={loggedIn}/>
}

export default Routes
