import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDC-yKIIwsYrVziL2PuSTjxQPpdKYX1tuw",
    authDomain: "giocommerce.firebaseapp.com",
    projectId: "giocommerce",
    storageBucket: "giocommerce.appspot.com",
    messagingSenderId: "582653725208",
    appId: "1:582653725208:web:5e3f41981307d4aa8ad16d",
    measurementId: "G-7SX7RRJJ6Z"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};