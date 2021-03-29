import firebase from 'firebase'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC7V7nVdfkBGWobTiCD3Ajc1TNaP5LuX_s",
    authDomain: "diary-131802.firebaseapp.com",
    projectId: "diary-131802",
    storageBucket: "diary-131802.appspot.com",
    messagingSenderId: "388892349271",
    appId: "1:388892349271:web:df8ef31c004eb9b51be412",
    measurementId: "G-FS5K3QQPCZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.database().ref('/notes')