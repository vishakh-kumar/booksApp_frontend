import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import MyAccountScreen from "../screen/MyAccountScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import RenderBooks from "../screen/RenderBooks";
import { StyleSheet } from "react-native";

const bottomTab = createBottomTabNavigator();
function MyTabs() {
    return (
        <bottomTab.Navigator>
            <bottomTab.Screen
                name="home"
                component={MyAccountScreen}
                options={{
                    labelPosition: "beside-icon",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={35}
                        />
                    ),
                }}
            />
            <bottomTab.Screen name="Welcome" component={WelcomeScreen} />
            <bottomTab.Screen
                name="Search"
                component={RenderBooks}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" color={color} size={28} />
                    ),
                }}
            />
        </bottomTab.Navigator>
    );
}

const FooterBar = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
};

export default FooterBar;
