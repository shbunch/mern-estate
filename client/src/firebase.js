// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-333bc.firebaseapp.com",
  projectId: "mern-estate-333bc",
  storageBucket: "mern-estate-333bc.appspot.com",
  messagingSenderId: "304633248017",
  appId: "1:304633248017:web:14cd205a6d82375d4034b0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);