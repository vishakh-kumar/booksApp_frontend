import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import RenderBooksScreen from "../screen/RenderBooksScreen";
import MyAccountScreen from "../screen/MyAccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Search"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="search" color={color} size={size} />
                    ),
                }}
                component={FeedNavigator}
            />
            <Tab.Screen
                name="Account"
                component={MyAccountScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={30}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default AppNavigator;
