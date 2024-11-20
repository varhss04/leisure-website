import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Vibe() {
  const location = useLocation();
  const navigate = useNavigate();

  // Read the query parameter for 'type' (the aesthetic)
  const params = new URLSearchParams(location.search);
  const aestheticType = params.get('type');  // Get 'type' from query string

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  const handleVibeSelection = (vibe) => {
    if (vibe === 'movies') {
      // Pass the query parameters to the Blog page
      navigate(`/blog?vibe=movies&aesthetic=${aestheticType}`);
    }
    if (vibe === 'books') {
      // Pass the query parameters to the Blog page
      navigate(`/blog?vibe=books&aesthetic=${aestheticType}`);
    }
    if (vibe === 'songs') {
      // Pass the query parameters to the Blog page
      navigate(`/blog?vibe=songs&aesthetic=${aestheticType}`);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Choose your vibe: books, movies, or songs?</h3>
      <div style={styles.buttonContainer}>
        <button
          type="button"
          style={{ ...styles.button, backgroundImage: 'url("books.jpg")' }}
          data-label="Books"
          onClick={() => handleVibeSelection('books')}
        ></button>
        <button
          type="button"
          style={{ ...styles.button, backgroundImage: 'url("movie.jpg")' }}
          data-label="Movies"
          onClick={() => handleVibeSelection('movies')}
        ></button>
        <button
          type="button"
          style={{ ...styles.button, backgroundImage: 'url("songs.jpeg")' }}
          data-label="Songs"
          onClick={() => handleVibeSelection('songs')}
        ></button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'rgb(254, 250, 249)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
  },
  heading: {
    color: '#3E4457',
    textAlign: 'center',
    fontFamily: 'Garamond, serif',
    fontWeight: 'lighter',
    fontSize: '32px',
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '30px',
  },
  button: {
    height: '300px',
    width: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    border: 'none',
    borderRadius: '15px',
    color: '#FFFFFF',
    fontFamily: 'Garamond, serif',
    fontSize: '28px',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingBottom: '20px',
    textAlign: 'center',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
  },
};

export default Vibe;
