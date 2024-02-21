// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDg7pTxTAhsZ2TVo94rP2zBkRKyAhkmE34",
  authDomain: "react-ecommerce-f6412.firebaseapp.com",
  projectId: "react-ecommerce-f6412",
  storageBucket: "react-ecommerce-f6412.appspot.com",
  messagingSenderId: "209369635181",
  appId: "1:209369635181:web:2700ecdf99827330452264",
  measurementId: "G-BK6CLJ4TWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);

export {fireDB,auth};
