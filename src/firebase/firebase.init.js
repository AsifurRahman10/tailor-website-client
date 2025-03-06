// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1gIeWH_l5kkUxlndSF_V_i_gY7HV8qP8",
    authDomain: "tailor-shop-auth.firebaseapp.com",
    projectId: "tailor-shop-auth",
    storageBucket: "tailor-shop-auth.firebasestorage.app",
    messagingSenderId: "156218647627",
    appId: "1:156218647627:web:d1e93ccf2a08f52ca7d9ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth