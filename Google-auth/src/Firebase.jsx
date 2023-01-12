import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCxo5DJp7u14r3yaV_oxifIWD5EXzzzcE",
  authDomain: "task-2d319.firebaseapp.com",
  projectId: "task-2d319",
  storageBucket: "task-2d319.appspot.com",
  messagingSenderId: "833251866326",
  appId: "1:833251866326:web:44122f9dd68812bbf77b77"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();