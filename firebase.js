// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh0gHYP8uKw5mWwIhuhBamaMpSIbVYkLA",
  authDomain: "monotone-web.firebaseapp.com",
  projectId: "monotone-web",
  storageBucket: "monotone-web.appspot.com",
  messagingSenderId: "404663079261",
  appId: "1:404663079261:web:1b6b234d1d28b441f658b4"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
