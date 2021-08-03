import React from "react";
import {
    Image,
    View,
    Text,
    StyleSheet,
    Linking,
    TouchableHighlight,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import IconButton from "../components/IconButton";
import Screen from "../components/Screen";
import colors from "../config/colors";

// need volumeInfo.averageRating in &&
// volumeInfo.categories &&
// volumeInfo.publishedDate
// volumeInfo.infoLink this is for purchase so tie it with a button
// volumeInfo.previewLink this is for reading
const BookShowScreen = ({ route }) => {
    const book = route.params;
    // console.log(book);
    return (
        <Screen>
            <View style={styles.container}>
                <AppText style={styles.title}>{book.volumeInfo.title}</AppText>
                <View style={styles.imageAuthorContainer}>
                    {book.volumeInfo.imageLinks ? (
                        <Image
                            style={styles.image}
                            source={{
                                uri: book.volumeInfo.imageLinks.thumbnail,
                            }}
                        />
                    ) : (
                        <Image
                            style={styles.image}
                            source={require("../assets/noImage.png")}
                        />
                    )}
                    <View style={styles.authorDateContainer}>
                        <View style={styles.authorDate}>
                            <AppText style={styles.author}>
                                {book.volumeInfo.authors}
                            </AppText>
                            <AppText>{book.volumeInfo.publishedDate}</AppText>
                            <AppButton
                                title="Purchase"
                                onPress={() =>
                                    Linking.openURL(book.volumeInfo.infoLink)
                                }
                            />
                        </View>
                        <View style={styles.iconContainer}>
                            <IconButton>
                                <FontAwesome
                                    style={styles.icon}
                                    name="plus-square"
                                    size={25}
                                />
                                <Text>Add To List</Text>
                            </IconButton>
                            <IconButton>
                                <MaterialCommunityIcons
                                    style={styles.icon}
                                    size={25}
                                    name="book-open-page-variant"
                                />
                                <Text>Read Sample</Text>
                            </IconButton>
                        </View>
                    </View>
                </View>
                <TouchableHighlight onPress={"pressed"}>
                    <AppText style={styles.description}>
                        {book.volumeInfo.description}
                    </AppText>
                </TouchableHighlight>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    author: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "500",
    },
    authorDate: {
        marginTop: 20,
        color: colors.medium,
        alignSelf: "flex-start",
    },
    container: {
        marginHorizontal: 10,
    },
    description: {
        fontSize: 20,
        marginTop: 15,
        textAlign: "justify",
        marginHorizontal: 5,
        height: 250,
        overflow: "scroll",
    },
    icon: {
        alignSelf: "center",
        marginVertical: 7,
    },
    iconContainer: {
        alignSelf: "flex-start",
        marginLeft: 20,
        marginTop: 10,
    },
    imageAuthorContainer: {
        flexDirection: "row",
    },
    image: {
        width: 200,
        height: 320,
    },
    authorDateContainer: {
        marginLeft: 15,
        width: "42%",
    },
    title: {
        fontSize: 35,
    },
});

export default BookShowScreen;
