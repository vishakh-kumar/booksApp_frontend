import React from "react";
import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import axios from "axios";
import AppFormField from "../components/forms/AppFormField";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen = ({ navigation }) => {
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleLogin = (credentials, setSubmitting) => {
        handleMessage(null);
        const url =
            "https://booksapp-backend-react-native.herokuapp.com/user/signin";
        axios.post(url, credentials).then((res) => {
            const result = res.data;
            const { message, status, data } = result;

            if (status !== "Success") {
                handleMessage(message, status);
            } else {
                navigation.navigate("Books Display", { ...data[0] });
            }
            setSubmitting(false);
        });
    };

    const handleMessage = (message, type = "Failed") => {
        setMessage(message);
        setMessageType(type);
    };

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/books.png")}
            />
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) =>
                    handleLogin(values, setSubmitting)
                }
                validationSchema={validationSchema}
            >
                <AppFormField
                    placeholder="Email"
                    icon="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                />
                <AppText style={styles.message}>{message}</AppText>
                <SubmitButton title="login" />
            </AppForm>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 250,
        height: 250,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },

    message: {
        textAlign: "center",
        color: colors.delete,
    },
});
export default LoginScreen;
