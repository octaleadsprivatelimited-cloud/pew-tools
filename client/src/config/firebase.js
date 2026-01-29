import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Firebase configuration
// For demo purposes, using a demo project config
// In production, replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "pew-tools-demo.firebaseapp.com",
  projectId: "pew-tools-demo",
  storageBucket: "pew-tools-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Connect to Firebase Emulators for local development
// Make sure Firebase Emulator Suite is running: firebase emulators:start
// To use emulators, uncomment the lines below:
/*
if (import.meta.env.DEV) {
  try {
    connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });
    connectFirestoreEmulator(db, "localhost", 8080);
    connectStorageEmulator(storage, "localhost", 9199);
    console.log("Connected to Firebase Emulators");
  } catch (error) {
    console.log("Firebase emulators not available, using production:", error.message);
  }
}
*/

export default app;
