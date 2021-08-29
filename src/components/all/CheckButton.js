import React, {useEffect, useState} from 'react';
import {Button} from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const CheckButton = ({title = "CheckButton", name, value, handleChange}) => {

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        handleChange && handleChange(name, value);
    }, [checked])

    return (
        <Button
            onPress={() => setChecked(!checked)}
            title={title}
            titleStyle={tw`text-white`}
            buttonStyle={tw.style(`justify-center items-center w-full py-8 rounded-lg`, {"bg-transparent border-blue-900	border": !checked})}
        />
    );
}

export default CheckButton;

