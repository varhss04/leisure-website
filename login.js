import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid Gmail address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/aesthetic'); // Navigate to the desired page after successful login
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Error connecting to the server');
    }
  };

  return (
    <div style={styles.body}>
      <h2 style={styles.heading}>Welcome Back!</h2>
      <div style={styles.loginContainer}>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="Email Address"
            required
            style={styles.inputField}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Password"
            required
            style={styles.inputField}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" className="login-button" style={styles.loginButton}>
            Log In
          </button>
        </form>
        <div style={styles.loginFooter}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#3E4457', textDecoration: 'underline' }}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

// Styles remain the same as you shared in your original code
const styles = {
  body: {
    backgroundColor: 'rgb(254, 250, 249)',
    backgroundImage: 'url("login1.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    fontFamily: 'Garamond, serif',
  },
  heading: {
    color: '#3E4457',
    textAlign: 'center',
    fontWeight: 'lighter',
    fontSize: '36px',
    marginBottom: '40px',
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '15px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    padding: '40px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputField: {
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #3E4457',
    borderRadius: '8px',
    fontSize: '18px',
    transition: 'border-color 0.3s ease',
  },
  loginButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#3E4457',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  loginFooter: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#3E4457',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
};

export default Login;
