// Utility to initialize Firebase with demo admin user
// This should be called once to set up the demo admin account
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const initDemoAdmin = async () => {
  const adminEmail = "admin@pewtools.com";
  const adminPassword = "admin123";

  try {
    // Try to create the admin user
    // Note: This will fail if the user already exists, which is fine
    await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
    console.log("Demo admin user created successfully!");
    console.log("Email:", adminEmail);
    console.log("Password:", adminPassword);
    return { success: true };
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.log("Demo admin user already exists");
      return { success: true, message: "User already exists" };
    }
    console.error("Error creating demo admin:", error);
    return { success: false, error: error.message };
  }
};

// Call this function in the browser console or create a setup page
// For production, remove this and set up admin users through Firebase Console
