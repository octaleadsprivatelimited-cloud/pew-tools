import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration — all app data is stored in Firestore only
const firebaseConfig = {
  apiKey: "AIzaSyAp-zlTX1XHYGBqV7zCfbVryw5i_pDejGk",
  authDomain: "pew-tools.firebaseapp.com",
  projectId: "pew-tools",
  storageBucket: "pew-tools.firebasestorage.app",
  messagingSenderId: "881554307864",
  appId: "1:881554307864:web:d7feb760edd81fc90f3c6d",
  measurementId: "G-JEQ6MTLLYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore only — no Firebase Storage; auth is for admin login
export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };

export default app;
