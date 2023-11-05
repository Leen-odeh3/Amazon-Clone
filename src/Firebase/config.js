// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirebasestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBiyYgaYqt-kQJrXVvwJcOn_3EEP0eVSoY",
  authDomain: "clone-b880a.firebaseapp.com",
  projectId: "clone-b880a",
  storageBucket: "clone-b880a.appspot.com",
  messagingSenderId: "1083077517359",
  appId: "1:1083077517359:web:ba830f507aa0e5cf7126da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
