// lib/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// ✅ Replace these with your actual Firebase project config values
const firebaseConfig = {
  apiKey: "AIzaSyAZDD1-pHPQWC_k67mxyej62YxVuKn1I7g",
  authDomain: "nutrition-tracking-system.firebaseapp.com",
  projectId: "nutrition-tracking-system",
  storageBucket: "nutrition-tracking-system.firebasestorage.app",
  messagingSenderId: "1028146397978",
  appId: "1:1028146397978:web:631f2aab424b810d20a2a3",
  measurementId: "G-EDQWFHVYYM"
};
// Initialize Firebase only once
const app = initializeApp(firebaseConfig);

// Firestore DB and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
