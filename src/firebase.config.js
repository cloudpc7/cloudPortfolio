import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLTg6XNoYwqst424IEAq820c3w2fSeRiA",
  authDomain: "cloudportfolio-440621.firebaseapp.com",
  projectId: "cloudportfolio-440621",
  storageBucket: "cloudportfolio-440621.firebasestorage.app",
  messagingSenderId: "1092386547852",
  appId: "1:1092386547852:web:efc52075b59923151433a9",
  measurementId: "G-BS59WYVLWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Export Firestore instance
