// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDUBESonrVqEcIFGR_WFGZIYUJuComRIU",
  authDomain: "montone-c3682.firebaseapp.com",
  projectId: "montone-c3682",
  storageBucket: "montone-c3682.appspot.com",
  messagingSenderId: "252810173942",
  appId: "1:252810173942:web:1259aab5347bb6d1ecfbd7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
