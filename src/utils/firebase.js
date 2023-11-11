// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB32q3O6iCR-mGS7aMBb5vNsvbZJ-kQudk",
  authDomain: "netflixgpt-db9c1.firebaseapp.com",
  projectId: "netflixgpt-db9c1",
  storageBucket: "netflixgpt-db9c1.appspot.com",
  messagingSenderId: "79325742107",
  appId: "1:79325742107:web:9d637f216f72642c33a4be",
  measurementId: "G-5ZGTV1SMNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();