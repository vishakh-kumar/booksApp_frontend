import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const AppButton = ({ title, onPress, color = "primary", style }) => {
    return (
        <TouchableOpacity
            style={[styles.button, style, { backgroundColor: colors[color] }]}
            onPress={onPress}
        >
            <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginVertical: 10,
    },
    text: {
        textTransform: "uppercase",
        fontWeight: "bold",
        color: colors.white,
    },
});
export default AppButton;
