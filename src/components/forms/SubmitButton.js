import React from "react";
import {useFormikContext} from "formik";
import {Button} from "react-native-elements";
import {colors} from "../../theme";
import tailwind from "tailwind-react-native-classnames";

function SubmitButton({title}) {
    const {handleSubmit} = useFormikContext();

    return <Button
        buttonStyle={{
            backgroundColor: colors.lightText,
            ...tailwind`py-4 px-8 rounded-xl`
        }}
        titleStyle={{
            color: colors.white,
            ...tailwind`text-center`
        }}
        title={title} onPress={handleSubmit}
    />;
}

export default SubmitButton;
