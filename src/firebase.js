// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfEfESXlOejJcHNefUkn46VGrlbKPNKWM",
  authDomain: "authentication-8b812.firebaseapp.com",
  projectId: "authentication-8b812",
  storageBucket: "authentication-8b812.firebasestorage.app",
  messagingSenderId: "793960667102",
  appId: "1:793960667102:web:3ca36f50962c89d3506f4f",
  measurementId: "G-29BTQKZXXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);
