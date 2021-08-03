import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import IconButton from "../components/IconButton";
import colors from "../config/colors";

const AppFormInput = ({
    handleSubmit,
    containerStyles,
    onChangeText,
    iconFront,
    iconEnd,
    placeholder,
    textInputStyles,
    ...otherProps
}) => {
    return (
        <View style={[styles.container, containerStyles]}>
            {iconFront && (
                <IconButton onPress={handleSubmit}>
                    <MaterialCommunityIcons
                        style={styles.frontIcon}
                        name={iconFront}
                    />
                </IconButton>
            )}
            <TextInput
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={[styles.textInput, textInputStyles]}
                {...otherProps}
            />

            {iconEnd && (
                <IconButton onPress={handleSubmit}>
                    <FontAwesome style={styles.endIcon} name={iconEnd} />
                </IconButton>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        backgroundColor: colors.white,
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
        width: "90%",
    },
});

export default AppFormInput;
