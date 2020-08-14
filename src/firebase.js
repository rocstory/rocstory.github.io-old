import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBW7SvkNzXlz3ji-0HEMPn-52OYBC7lOrU",
    authDomain: "rocportfolio-1b669.firebaseapp.com",
    databaseURL: "https://rocportfolio-1b669.firebaseio.com",
    projectId: "rocportfolio-1b669",
    storageBucket: "rocportfolio-1b669.appspot.com",
    messagingSenderId: "11288975312",
    appId: "1:11288975312:web:d6d41b881685d5fa0e8bd5",
    measurementId: "G-81SVSVZGZ3"
});

const db = firebaseApp.firestore();

export {db}; 