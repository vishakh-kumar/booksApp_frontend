import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppText from "../components/AppText";

const MyAccountScreen = ({ title }, { subtitle }) => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../assets/IMG_8015.jpg")}
                />
                <View style={styles.profileDetails}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subtitle && (
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    )}
                </View>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
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
    screen: {
        backgroundColor: colors.light,
    },
    subtitle: {
        color: colors.medium,
    },
    title: {
        fontSize: 25,
        fontWeight: "500",
    },
});

export default MyAccountScreen;
