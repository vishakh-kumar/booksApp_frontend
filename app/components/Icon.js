import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
    name,
    size = 40,
    backgroundColor = "black",
    iconColor = "white",
}) => {
    return (
        <View
            style={{
                height: size,
                width: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <MaterialCommunityIcons
                name={name}
                color={iconColor}
                size={size / 2}
            />
        </View>
    );
};

export default Icon;
