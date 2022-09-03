// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4ckBo6IIR0xmybi4HNcGQbjmO5743J1c",
  authDomain: "react-auth-5afe5.firebaseapp.com",
  projectId: "react-auth-5afe5",
  storageBucket: "react-auth-5afe5.appspot.com",
  messagingSenderId: "230191635940",
  appId: "1:230191635940:web:a45ff967f264bc6fd2bbf1",
  measurementId: "G-CXXK5JRVZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;
