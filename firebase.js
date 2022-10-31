// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5QnaiUQn1kmQyxRozbyyqQ46wjz11Rfk",
  authDomain: "monotone-1fb9e.firebaseapp.com",
  projectId: "monotone-1fb9e",
  storageBucket: "monotone-1fb9e.appspot.com",
  messagingSenderId: "315658848018",
  appId: "1:315658848018:web:01236fb5faaaab2a4615cb",
  measurementId: "G-HHPQ20H9WB"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
