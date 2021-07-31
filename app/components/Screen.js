import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

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
    },
});

export default Screen;
