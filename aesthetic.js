import React from "react";
import { useNavigate } from "react-router-dom";

function Aesthetic() {
  const navigate = useNavigate();

  const handleAestheticClick = (aesthetic) => {
    // Convert the aesthetic type to a more URL-friendly format
    const aestheticType = aesthetic === 'Dark Mode' ? 'dark' :
                          (aesthetic === 'Light Academia' ? 'light' :
                          (aesthetic === 'Neon' ? 'neon' : aesthetic));
    navigate(`/vibe?type=${aestheticType}`);  // Pass the aesthetic type as a query parameter
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: "#f7f2c1",
        minHeight: '100vh',
        color: '#3E4457',
        position: 'relative',
      }}
    >
      <h1
        style={{
          fontSize: '2em',
          fontFamily: 'Garamond, serif',
          color: '#3E4457',
          position: 'absolute',
          top: '20px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Choose your Aesthetic
      </h1>

      <div
        style={{
          display: 'flex',
          gap: '150px',
          justifyContent: 'center',
        }}
      >
        <div onClick={() => handleAestheticClick('Neon')} style={styles.aestheticItem}>
          <div style={styles.aestheticImage}>
            <img src="neon.jpg" alt="Neon Aesthetic" style={styles.image} />
          </div>
          <div style={styles.aestheticLabel}>Neon</div>
        </div>

        <div onClick={() => handleAestheticClick('Dark Mode')} style={styles.aestheticItem}>
          <div style={styles.aestheticImage}>
            <img src="darkmode.jpeg" alt="Dark Mode Aesthetic" style={styles.image} />
          </div>
          <div style={styles.aestheticLabel}>Dark Mode</div>
        </div>

        <div onClick={() => handleAestheticClick('Light Academia')} style={styles.aestheticItem}>
          <div style={styles.aestheticImage}>
            <img src="lightacademia.jpg" alt="Light Academia Aesthetic" style={styles.image} />
          </div>
          <div style={styles.aestheticLabel}>Light Academia</div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  aestheticItem: {
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  aestheticImage: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '5px solid #bfb86f',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  aestheticLabel: {
    marginTop: '10px',
    fontSize: '1.1em',
    fontFamily: 'Georgia, serif',
    transition: 'color 0.3s ease',
  },
};

export default Aesthetic;
