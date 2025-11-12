import { useState } from "react";
import type { FormEvent } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

export const AuthPage = () => {
  const { login, register, loginWithProvider, error, isAuthenticating } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleMode = () => {
    setIsLoginMode((prev) => !prev);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoginMode) {
      await login(formData.email, formData.password);
    } else {
      await register(
        {
          name: formData.name || formData.email.split("@")[0],
          email: formData.email,
        },
        formData.password,
      );
    }
  };

  return (
    <div className="auth-page container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>{isLoginMode ? "Welcome back" : "Create your Pew Tools account"}</h1>
          <p>
            {isLoginMode
              ? "Sign in to access saved carts, exclusive deals, and pro resources."
              : "Unlock pro pricing, wishlists, and project trackers tailored to your trade."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLoginMode && (
            <label>
              Full name
              <input
                type="text"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                placeholder="Jordan Maker"
              />
            </label>
          )}
          <label>
            Email address
            <input
              type="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={formData.password}
              onChange={(event) => setFormData({ ...formData, password: event.target.value })}
              required
            />
          </label>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={isAuthenticating}>
            {isAuthenticating ? "Please wait..." : isLoginMode ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="auth-provider-buttons">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              void loginWithProvider("google");
            }}
            disabled={isAuthenticating}
          >
            <FaGoogle aria-hidden />
            Continue with Google
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              void loginWithProvider("facebook");
            }}
            disabled={isAuthenticating}
          >
            <FaFacebook aria-hidden />
            Continue with Facebook
          </button>
        </div>

        <p className="auth-switch">
          {isLoginMode ? "Need an account?" : "Already a member?"}{" "}
          <button type="button" onClick={toggleMode} className="btn btn-link">
            {isLoginMode ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};
