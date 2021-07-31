import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const AppFormInput = ({
    iconFront,
    iconEnd,
    containerStyles,
    textInputStyles,
    ...otherProps
}) => {
    return (
        <View style={[styles.container, containerStyles]}>
            {iconFront && (
                <MaterialCommunityIcons
                    style={styles.frontIcon}
                    name={iconFront}
                />
            )}
            <TextInput
                style={[styles.textInput, textInputStyles]}
                {...otherProps}
                placeholder="Type something"
            />
            {iconEnd && <FontAwesome style={styles.endIcon} name={iconEnd} />}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 10,
    },
    endIcon: {
        fontSize: 20,
        marginRight: 10,
    },
    frontIcon: {
        fontSize: 20,
        marginLeft: 10,
    },
    textInput: {
        fontSize: 20,
    },
});

export default AppFormInput;
