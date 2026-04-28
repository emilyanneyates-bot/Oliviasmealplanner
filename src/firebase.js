import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjQDofz606fFj1IEDOTAmoOy7Ms_Bp6Ik",
  authDomain: "olivias-meal-planner.firebaseapp.com",
  projectId: "olivias-meal-planner",
  storageBucket: "olivias-meal-planner.firebasestorage.app",
  messagingSenderId: "176483967098",
  appId: "1:176483967098:web:076371cc7ac794914cdbc3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
