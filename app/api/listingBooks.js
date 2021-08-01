import client from "./client";

const endpoint = `/books/v1/volumes?q=${searchBook}&key=${api_key}`;

const getBooks = () => client.get(endpoint);

export default {
    getBooks,
};
