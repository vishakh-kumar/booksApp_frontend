import React from "react";
import { ImageBackground, View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            blurRadius={5}
            source={require("../assets/library.jpeg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/books.png")}
                />
                <AppText style={styles.tagline}>
                    Discover Your New Favorite
                </AppText>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton
                    title="Login"
                    onPress={() => navigation.navigate("Login")}
                />
                <AppButton
                    title="Register"
                    onPress={() => navigation.navigate("Register")}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        width: "90%",
        marginBottom: 100,
    },
    button: {},
    logo: {
        width: 250,
        height: 250,
    },
    logoContainer: {
        position: "absolute",
        top: 130,
        alignItems: "center",
    },
    tagline: {
        color: colors.white,
        fontSize: 30,
        fontFamily: "TimesNewRomanPS-ItalicMT",
        fontWeight: "500",
        paddingTop: 15,
    },
});
export default WelcomeScreen;
