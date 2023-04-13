// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfhcVU25_sOzdbkJgXJsQ7q28I0TPEzeg",
  authDomain: "zoom--plus.firebaseapp.com",
  projectId: "zoom--plus",
  storageBucket: "zoom--plus.appspot.com",
  messagingSenderId: "938558311995",
  appId: "1:938558311995:web:a7683f90e768e1259d161e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
