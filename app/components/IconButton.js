import React from "react";
import { TouchableOpacity } from "react-native";

const IconButton = ({ onPress, children }) => {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

export default IconButton;
