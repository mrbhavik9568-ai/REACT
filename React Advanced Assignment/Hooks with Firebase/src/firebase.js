// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5phOn5plaUhVWdrpAVhTyHYjoWGW9oT8",
  authDomain: "ecommerce-527bb.firebaseapp.com",
  projectId: "ecommerce-527bb",
  storageBucket: "ecommerce-527bb.firebasestorage.app",
  messagingSenderId: "749664583407",
  appId: "1:749664583407:web:7af7b51743927e5058651a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);