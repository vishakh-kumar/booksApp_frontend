import React from "react";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import MyAccountScreen from "./app/screen/MyAccountScreen";
import Screen from "./app/components/Screen";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import RenderBooks from "./app/screen/RenderBooks";
import AppText from "./app/components/AppText";
import colors from "./app/config/colors";
import BookListDisplay from "./app/components/BookListDisplay";
import AppFormInput from "./app/components/AppFormInput";
import FooterBar from "./app/components/FooterBar";
import BookShowScreen from "./app/screen/BookShowScreen";

export default function App() {
    return <RenderBooks />;
}
