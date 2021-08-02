import { create } from "apisauce";

const apiClient = create({
    baseURL: `https://www.googleapis.com`,
});

export default apiClient;

// https://www.googleapis.com/books/v1/volumes?q=${searchBook}&key=AIzaSyB8mFOr5Qfa4WvKlnZfSc5BziL3LTnNrLo
