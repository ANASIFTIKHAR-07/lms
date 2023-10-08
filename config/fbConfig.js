// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_cy3AT-w1T8oxXPpA9iMfEjMc-ZguObQ",
  authDomain: "hackathon-ce6e3.firebaseapp.com",
  projectId: "hackathon-ce6e3",
  storageBucket: "hackathon-ce6e3.appspot.com",
  messagingSenderId: "1064773096405",
  appId: "1:1064773096405:web:e344d0109ccd301f85635c",
  measurementId: "G-G9358C5PWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)