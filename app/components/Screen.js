import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import colors from "../config/colors";

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.light,
    },
});

export default Screen;
