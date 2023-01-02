// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU-FQ8HdBEFr9W3Ziq7ve_F2N7tyXlD1A",
  authDomain: "writeon-56b3b.firebaseapp.com",
  projectId: "writeon-56b3b",
  storageBucket: "writeon-56b3b.appspot.com",
  messagingSenderId: "1055255252563",
  appId: "1:1055255252563:web:a8cbfdd7cde30d9ea6c0a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)