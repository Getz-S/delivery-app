// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJaHyYxXbHEWIW4oeJDJwGSIAL5ch1Fmw",
  authDomain: "delivery-app-cfc38.firebaseapp.com",
  projectId: "delivery-app-cfc38",
  storageBucket: "delivery-app-cfc38.appspot.com",
  messagingSenderId: "835463942138",
  appId: "1:835463942138:web:92c1f2091690dc7bc11e43",
  measurementId: "G-BNDYP9N5N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
// const analytics = getAnalytics(app);
