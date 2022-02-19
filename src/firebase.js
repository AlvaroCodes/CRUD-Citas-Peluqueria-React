import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA5jRTFFq-iAuXvmBX6ehYnJwYx8Qinxnk",
    authDomain: "crud-peluqueria.firebaseapp.com",
    projectId: "crud-peluqueria",
    storageBucket: "crud-peluqueria.appspot.com",
    messagingSenderId: "109997996633",
    appId: "1:109997996633:web:5422336beecab6a8418f48"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}