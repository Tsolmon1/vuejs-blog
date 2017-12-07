/* This is the Firebase configuration file*/

import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDfizz_OaHSF8qnUsnxaVlnVap4DpLaLUA",
    authDomain: "blog-vuejs.firebaseapp.com",
    databaseURL: "https://blog-vuejs.firebaseio.com",
    projectId: "blog-vuejs",
    storageBucket: "blog-vuejs.appspot.com",
    messagingSenderId: "85606808701"
};

let app = Firebase.initializeApp(config);
let db = app.database();

// create a database references
const settingsRef = db.ref('settings');
const postsRef = db.ref('posts');
const usersRef = db.ref('users');

export { postsRef, usersRef, settingsRef };
