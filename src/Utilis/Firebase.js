// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvesTDgRGKmsLx4llqfUA1onM8isaFJac",
  authDomain: "netflixgpt-6f0aa.firebaseapp.com",
  projectId: "netflixgpt-6f0aa",
  storageBucket: "netflixgpt-6f0aa.appspot.com",
  messagingSenderId: "403377118234",
  appId: "1:403377118234:web:053c0fddaee1adb41c05a3",
  measurementId: "G-SM0EG6WRCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();