// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3BwuvO1DfGpSfgdouW45SS0aTjiY6Lu4",
  authDomain: "email-and-password-firebase.firebaseapp.com",
  projectId: "email-and-password-firebase",
  storageBucket: "email-and-password-firebase.appspot.com",
  messagingSenderId: "962981269173",
  appId: "1:962981269173:web:fc6e677121b4bc0780f8fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };