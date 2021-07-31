import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ItemSeparator from "../components/ItemSeparator";

const menuItems = [
    {
        title: "Books Read",
        icon: {
            name: "book",
            backgroundColor: colors.secondary,
        },
    },
    {
        title: "Reading List",
        icon: {
            name: "book-open-page-variant",
            backgroundColor: colors.secondary,
        },
    },
];

const MyAccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.profileContainer}>
                <ListItem
                    image={require("../assets/IMG_8015.jpg")}
                    title="name"
                    subtitle="email"
                    style={{ fontSize: 25 }}
                />
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <View>
                <ListItem
                    title="Logout"
                    IconComponent={
                        <Icon name="logout" backgroundColor={colors.logout} />
                    }
                />
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        marginBottom: 15,
    },
    listContainer: {
        marginBottom: 10,
    },
    screen: {
        marginTop: 25,
        backgroundColor: colors.light,
    },
});

export default MyAccountScreen;
