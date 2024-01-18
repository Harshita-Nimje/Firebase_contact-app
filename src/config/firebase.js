// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChwMZZeNEAeuAdY-H2Kto_bHOjUn9rKZM",
  authDomain: "vite-contact-cf969.firebaseapp.com",
  projectId: "vite-contact-cf969",
  storageBucket: "vite-contact-cf969.appspot.com",
  messagingSenderId: "762579036051",
  appId: "1:762579036051:web:715104c7a7245d6999ea66",
  measurementId: "G-R4TYV03F5H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);