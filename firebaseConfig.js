// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || functions.config().nanny_services_firebase.apikey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || functions.config().nanny_services_firebase.authdomain,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || functions.config().nanny_services_firebase.databaseurl,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || functions.config().nanny_services_firebase.projectid,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || functions.config().nanny_services_firebase.storagebucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || functions.config().nanny_services_firebase.messagingsenderid,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || functions.config().nanny_services_firebase.appid,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);