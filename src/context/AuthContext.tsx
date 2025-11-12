import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { UserProfile } from "../types";

type AuthContextValue = {
  user: UserProfile | null;
  login: (email: string, password: string) => Promise<void>;
  register: (user: UserProfile, password: string) => Promise<void>;
  loginWithProvider: (provider: "google" | "facebook") => Promise<void>;
  logout: () => void;
  isAuthenticating: boolean;
  error: string | null;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const mockUserFromEmail = (email: string): UserProfile => ({
  email,
  name: email.split("@")[0],
  preferences: {
    newsletter: true,
  },
});

const simulateNetwork = (ms = 500) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    setIsAuthenticating(true);
    setError(null);
    await simulateNetwork();

    if (!email || !password) {
      setError("Email and password are required.");
      setIsAuthenticating(false);
      return;
    }

    setUser(mockUserFromEmail(email));
    setIsAuthenticating(false);
  }, []);

  const register = useCallback(async (profile: UserProfile, password: string) => {
    setIsAuthenticating(true);
    setError(null);
    await simulateNetwork();

    if (!profile.email || !password) {
      setError("Email and password are required to create an account.");
      setIsAuthenticating(false);
      return;
    }

    setUser(profile);
    setIsAuthenticating(false);
  }, []);

  const loginWithProvider = useCallback(async (provider: "google" | "facebook") => {
    setIsAuthenticating(true);
    setError(null);
    await simulateNetwork(650);

    setUser({
      email: `${provider}-user@pewtools.com`,
      name: provider === "google" ? "Google User" : "Facebook User",
    });
    setIsAuthenticating(false);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      login,
      register,
      loginWithProvider,
      logout,
      isAuthenticating,
      error,
    }),
    [user, login, register, loginWithProvider, logout, isAuthenticating, error],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
