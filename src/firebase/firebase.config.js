// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjr8giY3kDEzMA7CE-K6Treahx1feppJM",
  authDomain: "g4-app-picw.firebaseapp.com",
  projectId: "g4-app-picw",
  storageBucket: "g4-app-picw.appspot.com",
  messagingSenderId: "674850294870",
  appId: "1:674850294870:web:fefc065a4622713c117ff7",
  measurementId: "G-EY3E4KYF36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);