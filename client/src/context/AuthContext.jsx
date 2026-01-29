import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Demo admin credentials
const ADMIN_CREDENTIALS = {
  email: "admin@pewtools.com",
  password: "admin123",
};

const STORAGE_KEY = "pew_tools_admin_auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedAuth = localStorage.getItem(STORAGE_KEY);
    if (storedAuth) {
      try {
        const userData = JSON.parse(storedAuth);
        setCurrentUser(userData);
      } catch (error) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check credentials
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const userData = {
        email: email,
        uid: "admin-user-001",
        displayName: "Admin User",
      };
      
      // Store in localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
      setCurrentUser(userData);
      
      return { success: true, user: userData };
    } else {
      return { success: false, error: "Invalid email or password" };
    }
  };

  const logout = async () => {
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 200));
    
    localStorage.removeItem(STORAGE_KEY);
    setCurrentUser(null);
    
    return { success: true };
  };

  const value = {
    currentUser,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
