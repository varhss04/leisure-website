import React from 'react';

const About = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Georgia, serif',
      backgroundColor: '#f5f2dc',
      color: '#3E4457',
      minHeight: '100vh',
      padding: '40px 20px',
    },
    followUs: {
      textAlign: 'center',
      fontSize: '1.2em',
      marginBottom: '50px',
      color: '#6e5d6b',
      letterSpacing: '2px',
    },
    followUsSpan: {
      fontSize: '1.8em',
      fontStyle: 'italic',
      color: '#3e4457',
    },
    iconContainer: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginBottom: '60px',
    },
    iconItem: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '3px solid #d4a373',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    aboutUs: {
      textAlign: 'center',
      maxWidth: '700px',
      color: '#3E4457',
      paddingTop: '20px',
      padding: '0 20px',
      borderTop: '2px solid #d4a373',
      lineHeight: '1.6',
    },
    aboutUsHeading: {
      fontSize: '2.5em',
      marginBottom: '10px',
      color: '#6e5d6b',
      fontWeight: '600',
      
    },
    aboutUsText: {
      fontSize: '1.15em',
      color: '#5c5c5c',
      lineHeight: '1.8',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.followUs}>
        Follow Us<br />
        <span style={styles.followUsSpan}>@lei.sure</span>
      </div>

      <div style={styles.iconContainer}>
        {/* Icons with images */}
        {["1.jpg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"].map((src, index) => (
          <div
            key={index}
            style={styles.iconItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            <img src={src} alt={`Icon ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>

      <div style={styles.aboutUs}>
        <h2 style={styles.aboutUsHeading}>About Us</h2>
        <p style={styles.aboutUsText}>Stay inspired, Stay connected.</p>
        <p style={styles.aboutUsText}>
          We are a team inspired by the arts, literature, music, and cinema. Our goal is to share moments of leisure that connect us all.
        </p>
      </div>
    </div>
  );
};

export default About;
