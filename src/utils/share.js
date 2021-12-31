import * as Linking from 'expo-linking';
import {PLATFORM_URL} from "./constants";

export const openInBrowser = (url) => {
    Linking.openURL(url || PLATFORM_URL);

}