import firebase from 'firebase'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDw063ZE6wOCf0RE1_y2-uJgtelMNc13QA",
    authDomain: "reviews-films.firebaseapp.com",
    projectId: "reviews-films",
    storageBucket: "reviews-films.appspot.com",
    messagingSenderId: "194862280892",
    appId: "1:194862280892:web:eb64962119fa26960fe0b9",
    measurementId: "G-MBHMRHF50W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database().ref('/notes')