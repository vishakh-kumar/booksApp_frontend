import React from "react";
import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import axios from "axios";
import * as Yup from "yup";
import Screen from "../components/Screen";

import AppFormField from "../components/forms/AppFormField";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = ({ navigation }) => {
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();

    const handleSignup = (credentials, setSubmitting) => {
        handleMessage(null);
        const url =
            "https://booksapp-backend-react-native.herokuapp.com/user/signup";
        axios.post(url, credentials).then((res) => {
            const result = res.data;
            const { message, status, data } = result;

            if (status !== "Success") {
                handleMessage(message, status);
            } else {
                navigation.navigate("Books Display", { ...data });
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
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values, { setSubmitting }) =>
                    handleSignup(values, setSubmitting)
                }
                validationSchema={validationSchema}
            >
                <AppFormField
                    placeholder="Name"
                    icon="account"
                    autoCapitalize="words"
                    autoCorrect={false}
                    name="name"
                    keyboardType="default"
                    textContentType="name"
                />
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
                    placeholder="Password"
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="password"
                    keyboardType="default"
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitButton style={styles.submit} title="Register" />
            </AppForm>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        height: 200,
        width: 200,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
    submit: {
        marginTop: 25,
    },
});

export default RegisterScreen;
