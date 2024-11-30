import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDrlu19t6a9JrLr1PyGLbWohGw9Exo0ptA",
    authDomain: "fitness-app-2b7c3.firebaseapp.com",
    projectId: "fitness-app-2b7c3",
    storageBucket: "fitness-app-2b7c3.firebasestorage.app",
    messagingSenderId: "385571590960",
    appId: "1:385571590960:web:bfc45273a5dbbb21902ef5"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


