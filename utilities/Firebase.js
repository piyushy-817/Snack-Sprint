// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3-VCuW3JpfLCEv3IxW85Z0gtw5WBIWGY",
  authDomain: "snacksprint-cba9b.firebaseapp.com",
  projectId: "snacksprint-cba9b",
  storageBucket: "snacksprint-cba9b.firebasestorage.app",
  messagingSenderId: "562186311669",
  appId: "1:562186311669:web:dd10873d8fc0c47b4772bc",
  measurementId: "G-MTJRS4WEKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);