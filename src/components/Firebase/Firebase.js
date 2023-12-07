// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5YNl4FspOIop7pembqdbtoc0SvZwHpkc",
  authDomain: "final-react-d829e.firebaseapp.com",
  projectId: "final-react-d829e",
  storageBucket: "final-react-d829e.appspot.com",
  messagingSenderId: "1072346322162",
  appId: "1:1072346322162:web:107b614a322d9afab42c6b",
  measurementId: "G-Y6K6FC6DJM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore (app)

