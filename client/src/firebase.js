// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4pa3W58B127ynNQ8QEpfkb8rGvq8BR_c",
  authDomain: "sinuous-gist-351013.firebaseapp.com",
  projectId: "sinuous-gist-351013",
  storageBucket: "sinuous-gist-351013.appspot.com",
  messagingSenderId: "1020908323669",
  appId: "1:1020908323669:web:1f47c00f738e3f15d065dc",
  measurementId: "G-PQ5GBL67WM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);