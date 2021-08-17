import React, {useState} from 'react'
import AppLoading from "expo-app-loading";
import {Provider} from 'react-redux'
import store from './utils/store'
import Router from './routes'
import {imageAssets} from './theme/images'
import {fontAssets} from './theme/fonts'
import './utils/ignore'

const App = () => {
    // state
    const [didLoad, setDidLoad] = useState(false)

    // handler
    const handleLoadAssets = async () => {
        // assets preloading
        await Promise.all([...imageAssets, ...fontAssets])
    }

    // rendering
    if (!didLoad)
        return (<AppLoading startAsync={handleLoadAssets} onFinish={() => setDidLoad(true)}
                            onError={console.warn}/>);
    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    )
}

export default App
