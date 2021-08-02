import client from "./client";

const api_key = "AIzaSyB8mFOr5Qfa4WvKlnZfSc5BziL3LTnNrLo";
const endpoint = `/books/v1/volumes?q=love&key=${api_key}&maxResults=39`;

const getBooks = () => client.get(endpoint);

export default {
    getBooks,
};
