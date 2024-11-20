import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors

    if (name.trim().length < 2) {
      setError('Full Name must be at least 2 characters long.');
      return;
    }

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
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        navigate('/login'); // Navigate to login after successful signup
      } else {
        setError(data.error || 'Signup failed');
      }
    } catch (error) {
      setError('Error connecting to the server');
    }
  };

  return (
    <div style={styles.body}>
      <h2 style={styles.heading}>Create Your Account</h2>
      <div style={styles.signupContainer}>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            style={styles.inputField}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            style={styles.inputField}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            style={styles.inputField}
          />
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.signupButton}>
            Sign Up
          </button>
        </form>
        <div style={styles.signupFooter}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#3E4457', textDecoration: 'underline' }}>
            Log In
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
  signupContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    padding: '40px',
    width: '400px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  },
  inputField: {
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #3E4457',
    borderRadius: '8px',
  },
  signupButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#3E4457',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
  },
  signupFooter: {
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

export default Signup;
