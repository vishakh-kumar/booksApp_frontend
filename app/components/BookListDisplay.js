import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "./Screen";
import AppText from "./AppText";
import colors from "../config/colors";

const BookListDisplay = ({ title, image, author }) => {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.bookContainer}>
                    <Image style={styles.image} source={{ uri: image }} />
                    <AppText style={styles.titleText}>{title}</AppText>
                    <AppText style={styles.authorText}>{author}</AppText>
                </View>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 106,
        height: 159,
    },
    bookContainer: {
        marginVertical: 5,
    },
    titleText: {
        width: 100,
        alignSelf: "center",
        fontSize: 15,
        lineHeight: 14,
        height: 20,
        overflow: "scroll",
        textTransform: "capitalize",
        paddingTop: 10,
        fontWeight: "500",
    },
    authorText: {
        width: 100,
        alignSelf: "center",
        fontSize: 14,
        lineHeight: 10,
        height: 25,
        overflow: "scroll",
        textTransform: "capitalize",
        paddingTop: 10,
        color: colors.dark,
    },
    container: {
        flexDirection: "row",
    },
});

export default BookListDisplay;
