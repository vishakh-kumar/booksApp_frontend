import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BookDisplayNavigator from "./app/navigation/BookDisplayNavigator";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/components/ImageInput";
import Screen from "./app/components/Screen";
import LoginScreen from "./app/screen/LoginScreen";
import RegisterScreen from "./app/screen/RegisterScreen";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <BookDisplayNavigator />
        </NavigationContainer>
    );
}
