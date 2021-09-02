import React from 'react'
import {StyleSheet, Image} from 'react-native'
import {images} from '../../../theme'
import Constants from "expo-constants";

const styles = StyleSheet.create({
    logo: {
        width: 85,
        height: Constants.statusBarHeight,
    },
})

const HeaderTitle = () => <Image source={images.in_app} style={styles.logo}/>

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle
