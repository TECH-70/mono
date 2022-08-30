// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKHY2cAzRlKDP7OiMK52okSQ9rJfGpjb4",
  authDomain: "monotone-1eefb.firebaseapp.com",
  projectId: "monotone-1eefb",
  storageBucket: "monotone-1eefb.appspot.com",
  messagingSenderId: "418528951771",
  appId: "1:418528951771:web:acfcc5a4d3f0bc7e37fbfe"
};    

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
