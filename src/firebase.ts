import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAP81nCrZHc5eZ2i8mdFHBAvgog5-2FzzI",
    authDomain: "todoist-3981a.firebaseapp.com",
    projectId: "todoist-3981a",
    storageBucket: "todoist-3981a.appspot.com",
    messagingSenderId: "196041203348",
    appId: "1:196041203348:web:ce8745f0a1e9fe3c1cde81",
    measurementId: "G-4TC5WB3B3M"
});


export { firebaseConfig as firebase };