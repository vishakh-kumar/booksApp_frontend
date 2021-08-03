import React from "react";
import { Button, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Screen from "./app/components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BookShowScreen from "./app/screen/BookShowScreen";
import BookDisplayNavigator from "./app/navigation/BookDisplayNavigator";
import FooterBar from "./app/navigation/FooterBar";

const Link = () => {
    const navigation = useNavigation();

    return (
        <Button
            title="Click"
            onPress={() => navigation.navigate("TweetDetails")}
        />
    );
};

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Link />
    </Screen>
);
const TweetDetails = () => (
    <Screen>
        <Text>Tweet Details</Text>
    </Screen>
);
const Account = () => (
    <Screen>
        <Text>Account</Text>
    </Screen>
);

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName="Tweets">
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name="Feed"
            options={{ headerShown: false }}
            component={StackNavigator}
        />
        <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <BookDisplayNavigator />
        </NavigationContainer>
    );
}
