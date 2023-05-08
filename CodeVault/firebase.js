// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQkQ4H73bFtYzGUXlhgI65ZmRFNQdEEi0",
  authDomain: "codevault-c9076.firebaseapp.com",
  projectId: "codevault-c9076",
  storageBucket: "codevault-c9076.appspot.com",
  messagingSenderId: "954135795317",
  appId: "1:954135795317:web:297bfa59cf53d5b1104a3c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };