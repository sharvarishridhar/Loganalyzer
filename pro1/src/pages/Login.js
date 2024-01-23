import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/Login.css";



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Replace this with your actual authentication logic
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-container">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
       <Link to="/Home">
        <button onClick={handleLogin}>Login</button></Link>
      </div>
    </div>
  );
};

export default Login;
