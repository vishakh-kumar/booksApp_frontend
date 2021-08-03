import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import RenderBooksScreen from "../screen/RenderBooksScreen";
import MyAccountScreen from "../screen/MyAccountScreen";

const Tab = createBottomTabNavigator();
const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Search" component={RenderBooksScreen} />
            {/* <Tab.Screen name="Reading List" /> */}
            <Tab.Screen name="Account" component={MyAccountScreen} />
        </Tab.Navigator>
    );
};

export default MyTabs;
