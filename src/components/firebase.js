// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfdwfov5ijpAHIHWnAugwf55A57h3hYB0",
  authDomain: "react-crud-app-18cbe.firebaseapp.com",
  projectId: "react-crud-app-18cbe",
  storageBucket: "react-crud-app-18cbe.appspot.com",
  messagingSenderId: "50731231006",
  appId: "1:50731231006:web:8efbdbd23f0a8a7c7f0b0f",
  measurementId: "G-8NTC48N3JR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
