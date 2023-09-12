  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC0kzKnvB1i_HKvKpKoWM9rYJTl71ezALc",
  authDomain: "todoit-40e50.firebaseapp.com",
  projectId: "todoit-40e50",
  storageBucket: "todoit-40e50.appspot.com",
  messagingSenderId: "394872164886",
  appId: "1:394872164886:web:2f22468650da50d0269b37",
 
};

// Initialize Firebase
const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)