import React from "react";
import {StyleSheet} from "react-native";

import Text from "../common/Text";

function ErrorMessage({error, visible, style}) {
    if (!visible || !error) return null;

    return <Text style={[styles.error, style]}>{error}</Text>;
}

const styles = StyleSheet.create({
    error: {color: "red"},
});

export default ErrorMessage;
