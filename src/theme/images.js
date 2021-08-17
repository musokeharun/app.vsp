import {Asset} from 'expo-asset'

// svg
import Logo from '../../assets/images/icon-y.png'

export const svgs = {
    logo: Logo,
}

// png/jpeg
export const images = {
    logo_sm: require('../../assets/images/icon-y.png'),
    logo_lg: require('../../assets/images/icon-y.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
