import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3LvCl8ast2xycqIjKOeMD8W6sBO9JBrE",
  authDomain: "clone-91d21.firebaseapp.com",
  databaseURL: "https://clone-91d21.firebaseio.com",
  projectId: "clone-91d21",
  storageBucket: "clone-91d21.appspot.com",
  messagingSenderId: "423965057610",
  appId: "1:423965057610:web:8981a5eeedaf4e4116fcb3",
  measurementId: "G-T20VSEDY91",
});

const auth = firebase.auth();

export { auth };
