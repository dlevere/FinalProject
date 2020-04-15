import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBy06cAEJj0DVqWUOnnBSaUbO1ST8KjBfA",
    authDomain: "finalproject-d3ed6.firebaseapp.com",
    databaseURL: "https://finalproject-d3ed6.firebaseio.com",
    projectId: "finalproject-d3ed6",
    storageBucket: "finalproject-d3ed6.appspot.com",
    messagingSenderId: "763506843684",
    appId: "1:763506843684:web:66e883f94687552c4178b1",
    measurementId: "G-5SD67G109K"
};
let app = Firebase.initializeApp(config);
export const db = app.database();