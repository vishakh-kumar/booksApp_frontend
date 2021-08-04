import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BookShowScreen from "../screen/BookShowScreen";
import RenderBooksScreen from "../screen/RenderBooksScreen";
import LoginScreen from "../screen/LoginScreen";
import MyAccountScreen from "../screen/MyAccountScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import RegisterScreen from "../screen/RegisterScreen";
import AppNavigator from "./AppNavigator";

const Stack = createNativeStackNavigator();

const BookDisplayNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Books Display"
            component={AppNavigator}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="myAccount" component={MyAccountScreen} />
        <Stack.Screen
            name="Books"
            component={BookShowScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default BookDisplayNavigator;
