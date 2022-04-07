import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // AGREGADO


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRlJLqh5_obQi_VAdvW0QGsSf74fM72kI",
  authDomain: "react-coderhouse-be714.firebaseapp.com",
  projectId: "react-coderhouse-be714",
  storageBucket: "react-coderhouse-be714.appspot.com",
  messagingSenderId: "39053078915",
  appId: "1:39053078915:web:d0f593b94b5e29f62086b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // AGREGADO