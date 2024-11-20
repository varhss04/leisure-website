import React from 'react';
import { Link } from 'react-router-dom';

function Leisure() {
  return (
    <div
      style={{
        height: "100vh",
        margin: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: 'url("download.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          width: "100%",
          backgroundColor: "#f2edb6",
          color: "#0c0c0c",
          textAlign: "left",
          padding: "15px 20px",
          fontFamily: "Garamond",
          fontSize: "15px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Link to="/about" style={{ textDecoration: "none", color: "#5C534B" }}>
          About Us
        </Link>
      </nav>

      {/* Main content */}
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1
          style={{
            color: "#f2edb6",
            fontWeight: "bold",
            fontSize: "250px",
            margin: "0 0 5px",
            fontFamily: 'Petit Formal Script',
          }}
        >
          Leisure
        </h1>
        <h3
          style={{
            color: "rgb(240, 225, 225)",
            fontWeight: "normal",
            margin: "0",
            fontSize: "30px",
            fontFamily: "'Garamond', serif",
          }}
        >
          Your one-stop destination for everything niche
        </h3>
        <div style={{ marginTop: "20px" }}>
          {/* Signup and Login buttons with links */}
          <Link to="/signup">
            <button
              style={{
                height: "40px",
                width: "120px",
                background: "rgb(240, 225, 225)",
                borderRadius: "32px",
                color: "#5C534B",
                fontFamily: "Garamond",
                cursor: "pointer",
                margin: "0 10px",
                border: "none",
                fontSize: "18px",
              }}
            >
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button
              style={{
                height: "40px",
                width: "120px",
                background: "rgb(240, 225, 225)",
                borderRadius: "32px",
                color: "#5C534B",
                fontFamily: "Garamond",
                cursor: "pointer",
                margin: "0 10px",
                border: "none",
                fontSize: "18px",
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Leisure;
