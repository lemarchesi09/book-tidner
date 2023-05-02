// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA66EXoHzgALntfRHF2pbJ3D8VK5-gIzA8",
  authDomain: "book-tidner.firebaseapp.com",
  projectId: "book-tidner",
  storageBucket: "book-tidner.appspot.com",
  messagingSenderId: "626114477274",
  appId: "1:626114477274:web:e531ea8a04492c471d79e3",
  measurementId: "G-5FZ4FJJXT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
export default app;