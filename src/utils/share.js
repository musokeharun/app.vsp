import * as Linking from 'expo-linking';
import {PLATFORM_URL} from "./constants";

export const openInBrowser = () => {
    Linking.openURL(PLATFORM_URL);

}