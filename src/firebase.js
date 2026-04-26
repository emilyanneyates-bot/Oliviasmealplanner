import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2NUOlf4LavoME6BMvoj8RptjMwfo7zfk",
  authDomain: "meal-planner-app-39b10.firebaseapp.com",
  projectId: "meal-planner-app-39b10",
  storageBucket: "meal-planner-app-39b10.firebasestorage.app",
  messagingSenderId: "551951550436",
  appId: "1:551951550436:web:b265185767c6de05a0a9f1",
  measurementId: "G-SHHTD2YSB3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
