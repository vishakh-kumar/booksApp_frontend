import React from "react";
import { Text } from "react-native";
import defaultTextStyle from "../config/defaultTextStyle";

const AppText = ({ children, style }) => {
    return <Text style={[defaultTextStyle.text, style]}>{children}</Text>;
};

export default AppText;
