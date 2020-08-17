import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA7vTPaOnyeTD5rrqYdAwat2kENu2pBXTQ",
    authDomain: "twitter-clone-5dd39.firebaseapp.com",
    databaseURL: "https://twitter-clone-5dd39.firebaseio.com",
    projectId: "twitter-clone-5dd39",
    storageBucket: "twitter-clone-5dd39.appspot.com",
    messagingSenderId: "682887644235",
    appId: "1:682887644235:web:52e5d3d35f6cca0f5439ce",
    measurementId: "G-T03G57N4J3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;