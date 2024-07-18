import React, { useState } from "react";
import firebase from "./firebaseConfig"; // Import your Firebase configuration
import { signOut } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log("User logged in:", userCredential.user);
      // Handle successful login (e.g., redirect to another page)
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage(error.message); // Display error message to user
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(firebase.auth());
      console.log("User logged out successfully");
      // Handle successful logout (e.g., clear user data, redirect)
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout error (optional)
    }
  };
  return (
    <form onSubmit={handleLogin}>
      {/* ... your existing form elements ... */}
      <button type="button" className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </form>
  );

  return (
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;