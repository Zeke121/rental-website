import firebase from 'firebase/app';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-PMgbmFG_4mSSe2M3_LaQzuMgRuMD2J4",
  authDomain: "rentaldb-61ab8.firebaseapp.com",
  projectId: "rentaldb-61ab8",
  storageBucket: "rentaldb-61ab8.appspot.com",
  messagingSenderId: "495348711349",
  appId: "1:495348711349:web:eb0e5682b68e315542e3fc",
  measurementId: "G-R9YNNX9J3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export default firebase;