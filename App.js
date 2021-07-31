import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./app/components/Screen";
import MyAccountScreen from "./app/screen/MyAccountScreen";

export default function App() {
    return <MyAccountScreen />;
}
