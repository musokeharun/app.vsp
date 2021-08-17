import {DefaultTheme} from "@react-navigation/native";
import {colors} from "../../theme";

const navigationTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.gray,
        background: colors.primaryDark,
    },
};
export default navigationTheme;
