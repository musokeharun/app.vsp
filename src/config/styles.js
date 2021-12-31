import {Platform} from "react-native";

import {colors} from "../theme";

export default {
    colors,
    text: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
};