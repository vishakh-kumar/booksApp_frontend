import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import AppFormInput from "../components/AppFormInput";
import BookListDisplay from "../components/BookListDisplay";
import Screen from "../components/Screen";
import colors from "../config/colors";

const bookListing = [
    {
        id: 1,
        name: "book1",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/1.jpeg"),
    },
    {
        id: 2,
        name: "book2",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/2.jpeg"),
    },
    {
        id: 3,
        name: "book3",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/3.jpeg"),
    },
    {
        id: 4,
        name: "book4",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/4.jpeg"),
    },
    {
        id: 5,
        name: "book5",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/5.jpeg"),
    },
    {
        id: 6,
        name: "book6",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/6.jpeg"),
    },
    {
        id: 7,
        name: "book7",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/7.jpeg"),
    },
    {
        id: 8,
        name: "book8",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/8.jpeg"),
    },
    {
        id: 9,
        name: "book9",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/9.jpeg"),
    },
    {
        id: 10,
        name: "book10",
        author: "jaggu prasad yadav",
        year: 1998,
        image: require("../assets/books_image/10.jpeg"),
    },
];

const RenderBooks = () => {
    return (
        <Screen>
            <AppFormInput
                iconEnd="search"
                placeholder="Search For Book"
                textInputStyles={styles.searchBoxText}
                containerStyles={styles.containerStyles}
            />
            <View style={styles.bookContainer}>
                <FlatGrid
                    itemDimension={110}
                    spacing={1}
                    data={bookListing}
                    keyExtractor={(book) => book.id.toString()}
                    renderItem={({ item }) => (
                        <BookListDisplay
                            title={item.name}
                            author={item.author}
                            image={item.image}
                        />
                    )}
                />
            </View>
        </Screen>
    );
};
const styles = StyleSheet.create({
    bookContainer: {
        marginLeft: 18,
        marginTop: 15,
    },
    containerStyles: {
        justifyContent: "space-between",
        marginTop: 15,
        width: "90%",
    },
    searchBoxText: {
        marginLeft: 10,
    },
});

export default RenderBooks;
