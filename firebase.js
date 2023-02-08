// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyDC-yKIIwsYrVziL2PuSTjxQPpdKYX1tuw",
    authDomain: "giocommerce.firebaseapp.com",
    projectId: "giocommerce",
    storageBucket: "giocommerce.appspot.com",
    messagingSenderId: "582653725208",
    appId: "1:582653725208:web:5e3f41981307d4aa8ad16d",
    measurementId: "G-7SX7RRJJ6Z"
  };


  firebase.initializeApp(firebaseConfig);


  export default firebase;
  