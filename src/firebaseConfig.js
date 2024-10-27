// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl2ySOJKPpuk0zjCnWvKAOJo1j1cNh9q0",
  authDomain: "nanny-services-app.firebaseapp.com",
  projectId: "nanny-services-app",
  storageBucket: "nanny-services-app.appspot.com",
  messagingSenderId: "931936030474",
  appId: "1:931936030474:web:bd3908b7326c2c9da034f3",
  measurementId: "G-9WGB28DXNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);