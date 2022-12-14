// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYY8y22F5oXdySbblcEPaQ3yQ58jPXm8k",
  authDomain: "parcial-2022-poo.firebaseapp.com",
  projectId: "parcial-2022-poo",
  storageBucket: "parcial-2022-poo.appspot.com",
  messagingSenderId: "1045808333518",
  appId: "1:1045808333518:web:05991e539ca54b0fac469f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db