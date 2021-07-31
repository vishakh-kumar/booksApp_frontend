import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

const ItemSeparator = () => {
    return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
    separator: {
        backgroundColor: colors.light,
        height: 1.5,
        width: "100%",
    },
});
export default ItemSeparator;
