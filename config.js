import firebase from 'firebase';

require('@firebase/firestore')

 
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB-KNZmDk-h_wCro957TXgBg6nLXIbcJUQ",
    authDomain: "lost-and-found-16286.firebaseapp.com",
    projectId: "lost-and-found-16286",
    storageBucket: "lost-and-found-16286.appspot.com",
    messagingSenderId: "688444007655",
    appId: "1:688444007655:web:3052754b19219417692e42"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();