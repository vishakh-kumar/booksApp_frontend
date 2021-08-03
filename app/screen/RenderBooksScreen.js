import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import client from "../api/client";
import BookListDisplay from "../components/BookListDisplay";
import BookShowScreen from "../screen/BookShowScreen";

import AppFormInput from "../components/AppFormInput";
// import BookRenderComponent from "../components/BookRenderComponent";
import Screen from "../components/Screen";

const categories = [
    "fiction",
    "horror",
    "romance",
    "thriller",
    "suspense",
    "action",
    "mystery",
    "biography",
    "science",
];

const searchTextOnStart =
    categories[Math.floor(Math.random() * categories.length)];

const RenderBooksScreen = ({ navigation }) => {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchBook, setSearchBook] = useState(searchTextOnStart);

    //======================================
    //            API data & Call
    //======================================
    const api_key = "AIzaSyB8mFOr5Qfa4WvKlnZfSc5BziL3LTnNrLo";
    const endpoint = `/books/v1/volumes?q=${searchBook}&key=${api_key}&maxResults=39`;

    const getBooks = () => client.get(endpoint);

    const loadListings = async () => {
        setLoading(true);
        const response = await getBooks();
        setLoading(false);
        if (!response.ok) return setError(true);

        setError(false);
        setListings(response.data.items);
    };

    useEffect(() => {
        loadListings();
        return () => {
            setListings({});
        };
    }, []);
    //======================================

    return (
        <Screen>
            <AppFormInput
                iconEnd="search"
                placeholder="Search For Book"
                textInputStyles={styles.searchBoxText}
                containerStyles={styles.containerStyles}
                onChangeText={(text) => setSearchBook(text)}
                // handleSubmit={() => (
                //
                // )}
            />
            <View style={styles.bookContainer}>
                <FlatGrid
                    itemDimension={115}
                    spacing={3}
                    data={listings}
                    keyExtractor={(book) => book.id.toString()}
                    renderItem={({ item }) => (
                        <BookListDisplay
                            title={item.volumeInfo.title}
                            author={item.volumeInfo.authors}
                            image={
                                item.volumeInfo.imageLinks &&
                                item.volumeInfo.imageLinks.thumbnail
                            }
                            onPress={() => navigation.navigate("Books", item)}
                        />
                    )}
                />
            </View>
        </Screen>
    );
};
const styles = StyleSheet.create({
    containerStyles: {
        justifyContent: "space-between",
        marginTop: 15,
        width: "90%",
    },
    bookContainer: {
        marginLeft: 15,
        marginTop: 15,
    },
    searchBoxText: {
        marginLeft: 10,
    },
});

export default RenderBooksScreen;
