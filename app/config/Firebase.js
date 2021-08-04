import firebase from "react-native-firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8mFOr5Qfa4WvKlnZfSc5BziL3LTnNrLo",
    authDomain: "findbooks-app.firebaseapp.com",
    databaseURL: "https://findbooks-app-default-rtdb.firebaseio.com",
    projectId: "findbooks-app",
    storageBucket: "findbooks-app.appspot.com",
    messagingSenderId: "588584301564",
    appId: "1:588584301564:web:1527e4a759e85e6d48b879",
    measurementId: "G-QWSF02H5L0",
};

// Initialize
const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
