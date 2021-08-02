import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import listingBooksApi from "../api/listingBooksApi";
import AppFormInput from "../components/AppFormInput";
import BookListDisplay from "../components/BookListDisplay";
import FooterBar from "../components/FooterBar";
import Screen from "../components/Screen";
import colors from "../config/colors";

const RenderBooks = () => {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        setLoading(true);
        const response = await listingBooksApi.getBooks();
        setLoading(false);
        console.log(response.data.items);
        if (!response.ok) return setError(true);

        setError(false);
        setListings(response.data.items);
    };

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
                    itemDimension={115}
                    spacing={3}
                    data={listings}
                    keyExtractor={(book) => book.id.toString()}
                    renderItem={({ item }) => (
                        <BookListDisplay
                            title={item.volumeInfo.title}
                            author={item.volumeInfo.authors}
                            image={item.volumeInfo.imageLinks.thumbnail}
                        />
                    )}
                />
            </View>
        </Screen>
    );
};
const styles = StyleSheet.create({
    bookContainer: {
        marginLeft: 15,
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
