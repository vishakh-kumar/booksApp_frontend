import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BookShowScreen from "../screen/BookShowScreen";
import RenderBooksScreen from "../screen/RenderBooksScreen";

const Stack = createNativeStackNavigator();

const BookDisplayNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Books Display"
            component={RenderBooksScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Books"
            component={BookShowScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

export default BookDisplayNavigator;
