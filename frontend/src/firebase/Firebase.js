// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZkVpn8GIybKiqqbr3YATSBEPLrJuVDg",
  authDomain: "fit-platter.firebaseapp.com",
  projectId: "fit-platter",
  storageBucket: "fit-platter.appspot.com",
  messagingSenderId: "645605084401",
  appId: "1:645605084401:web:029c6ce9168eaaca9b2d50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth };
