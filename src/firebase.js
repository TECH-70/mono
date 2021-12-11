import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDDUBESonrVqEcIFGR_WFGZIYUJuComRIU",
  authDomain: "montone-c3682.firebaseapp.com",
  projectId: "montone-c3682",
  storageBucket: "montone-c3682.appspot.com",
  messagingSenderId: "252810173942",
  appId: "1:252810173942:web:1259aab5347bb6d1ecfbd7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
