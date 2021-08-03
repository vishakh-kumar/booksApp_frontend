import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";

import client from "../api/client";
import BookListDisplay from "../components/BookListDisplay";

const BookRenderComponent = ({ searchBook, onPress, navigation }) => {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log(searchBook);
    //======================================
    //            API data
    //======================================
    const api_key = "AIzaSyB8mFOr5Qfa4WvKlnZfSc5BziL3LTnNrLo";
    const endpoint = `/books/v1/volumes?q=${searchBook}&key=${api_key}&maxResults=39`;

    const getBooks = () => client.get(endpoint);
    //======================================

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
    }, []);

    return (
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
                        onPress={onPress}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bookContainer: {
        marginLeft: 15,
        marginTop: 15,
    },
});
export default BookRenderComponent;
