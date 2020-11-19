import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
    .initializeApp({

        apiKey: "AIzaSyDdx1quFvu3L5EYUsHQ8EuVKQUXIkfNaPU",
        authDomain: "vue-cli-firepost.firebaseapp.com",
        databaseURL: "https://vue-cli-firepost.firebaseio.com",
        projectId: "vue-cli-firepost",
        storageBucket: "vue-cli-firepost.appspot.com",
        messagingSenderId: "591867735102",
        appId: "1:591867735102:web:c4e7153a08ccf2add0b56f",
        measurementId: "G-VFS3N7JLZJ"
    })
    .firestore();

export const postRef = db.collection("items");

