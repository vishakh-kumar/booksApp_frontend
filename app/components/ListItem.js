import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import Icon from "./Icon";

const ListItem = ({
    style,
    image,
    title,
    subtitle,
    IconComponent,
    onPress,
}) => {
    return (
        <TouchableHighlight
            underlayColor={colors.medium}
            onPress={() => console.log("pressed")}
        >
            <View style={styles.container}>
                {IconComponent}
                {image && (
                    <Image style={styles.image} source={{ uri: image }} />
                )}

                <View style={styles.profileDetails}>
                    {title && (
                        <AppText style={[styles.title, style]}>{title}</AppText>
                    )}
                    {subtitle && (
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    )}
                </View>
            </View>
        </TouchableHighlight>
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
