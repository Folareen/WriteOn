// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCpSsX3vrh1KmqA6oaTsankwsau0MJBsw",
  authDomain: "writeon-4d907.firebaseapp.com",
  projectId: "writeon-4d907",
  storageBucket: "writeon-4d907.appspot.com",
  messagingSenderId: "272140093738",
  appId: "1:272140093738:web:907ced367efd8324ed7653"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)