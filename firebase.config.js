// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADUoKfVGZPrmp2filzAjy50to4BUmR3v0",
  authDomain: "numbers-dcac3.firebaseapp.com",
  projectId: "numbers-dcac3",
  storageBucket: "numbers-dcac3.appspot.com",
  messagingSenderId: "292358136997",
  appId: "1:292358136997:web:d8e14fb0b307c8fcb7d94c",
  measurementId: "G-HP0NLY1X07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db= getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };