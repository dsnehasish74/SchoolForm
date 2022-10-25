import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFX2SorFb0KkjS98it6p95XBSrwv282cg",
  authDomain: "medios-60b59.firebaseapp.com",
  databaseURL: "https://medios-60b59.firebaseio.com",
  projectId: "medios-60b59",
  storageBucket: "medios-60b59.appspot.com",
  messagingSenderId: "38496733526",
  appId: "1:38496733526:web:e2373fdd8d16c15a67eef7",
  measurementId: "G-WD7TCMCJXN",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
