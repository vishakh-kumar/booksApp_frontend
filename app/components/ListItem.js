import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ style, image, title, subtitle, IconComponent }) => {
    return (
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.profileDetails}>
                <AppText style={[styles.title, style]}>{title}</AppText>
                {subtitle && (
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                )}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 15,
        flexDirection: "row",
    },
    profileDetails: {
        justifyContent: "center",
        marginLeft: 15,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    subtitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
        textTransform: "capitalize",
    },
});

export default ListItem;
