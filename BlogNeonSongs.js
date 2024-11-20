import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogNeonSongs = () => {
  const [bucketItems, setBucketItems] = useState([]);
  const [newBucketItem, setNewBucketItem] = useState('');
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [validPage, setValidPage] = useState(false);

  const location = useLocation();

  // Validate the page based on URL parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const vibe = queryParams.get('vibe');
    const aesthetic = queryParams.get('aesthetic');

    if (vibe === 'songs' && aesthetic === 'neon') {
      setValidPage(true);
    } else {
      setValidPage(false);
    }
  }, [location]);

  // Fetch posts from the backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/blog-neon-songs')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addBucketItem = () => {
    if (newBucketItem.trim() !== '') {
      setBucketItems([...bucketItems, newBucketItem]);
      setNewBucketItem('');
    }
  };

  const deleteBucketItem = (index) => {
    setBucketItems(bucketItems.filter((_, i) => i !== index));
  };

  // Save a new post to the backend
  const savePost = () => {
    if (newPostContent.trim()) {
      axios
        .post('http://localhost:5000/blog-neon-songs', { content: newPostContent })
        .then((response) => {
          setPosts([...posts, response.data.post]);
          setNewPostContent('');
          closeModal();
        })
        .catch((error) => console.error('Error saving post:', error));
    }
  };

  // Delete a post from the backend
  const deletePost = (id) => {
    axios
      .delete(`http://localhost:5000/blog-neon-songs/${id}`)
      .then(() => setPosts(posts.filter((post) => post._id !== id)))
      .catch((error) => console.error('Error deleting post:', error));
  };

  if (!validPage) {
    return (
      <div style={styles.errorPage}>
        <h1>Sorry, this page is not available for the current vibe and aesthetic.</h1>
      </div>
    );
  }

  return (
    <div style={styles.body}>
      <div style={styles.header}>
        <div style={styles.brand}>Leisure songs</div>
        <div style={styles.nav}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </div>
      </div>

      <div style={styles.mainContainer}>
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Bucket List</h2>
          <ul style={styles.bucketList}>
            {bucketItems.map((item, index) => (
              <li key={index} style={styles.bucketItem}>
                {item}
                <button
                  style={styles.deleteButton}
                  onClick={() => deleteBucketItem(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <div style={styles.inputContainer}>
            <input
              type="text"
              style={styles.bucketInput}
              value={newBucketItem}
              onChange={(e) => setNewBucketItem(e.target.value)}
              placeholder="New item..."
            />
            <button style={styles.addButton} onClick={addBucketItem}>
              Add
            </button>
          </div>
        </div>

        <div style={styles.content}>
          {posts.map((post) => (
            <div key={post._id} style={styles.post}>
              <div style={styles.contentPreview}>{post.content}</div>
              <button
                style={styles.deletePostButton}
                onClick={() => deletePost(post._id)}
              >
                Delete Post
              </button>
            </div>
          ))}
        </div>
      </div>

      <button style={styles.addPostButton} onClick={openModal}>
        +
      </button>

      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button style={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <div style={styles.modalTitle}>Create New Post</div>
            <textarea
              style={styles.modalTextarea}
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Write your post here..."
            ></textarea>
            <button style={styles.saveButton} onClick={savePost}>
              Save Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  body: {
    backgroundImage: 'url("neonblog.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    color: '#fff',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    animation: 'fadeIn 1.5s ease-in-out',
  },
  errorPage: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    borderRadius: '8px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'rgba(112, 109, 97, 0.3)',
    color: '#fff',
    borderRadius: '8px',
    marginBottom: '20px',
    zIndex: 1,
    animation: 'slideDown 1s ease',
  },
  brand: {
    fontSize: '1.8em',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
  },
  navLink: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  mainContainer: {
    display: 'flex',
    gap: '20px',
    flexGrow: 1,
    paddingBottom: '30px',
  },
  sidebar: {
    flex: 1,
    padding: '20px',
    backgroundColor: 'rgba(117, 113, 97, 0.3)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'slideLeft 1s ease',
  },
  sidebarTitle: {
    marginBottom: '15px',
    color: '#fff',
  },
  bucketList: {
    listStyle: 'none',
    marginBottom: '20px',
    padding: 0,
  },
  bucketItem: {
    padding: '8px 12px',
    backgroundColor: 'rgba(243, 244, 246, 0.3)',
    marginBottom: '8px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'transform 0.2s',
  },
  deleteButton: {
    backgroundColor: '#88524c',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  bucketInput: {
    flex: 1,
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid rgba(112, 109, 97, 0.3)',
  },
  addButton: {
    padding: '8px 12px',
    borderRadius: '5px',
    backgroundColor: '#88524c',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9em',
  },
  content: {
    flex: 2,
    padding: '20px',
    backgroundColor: 'rgba(112, 109, 97, 0.3)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'slideRight 1s ease',
    overflowY: 'auto',
  },
  post: {
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    color: '#000',
    fontSize: '1.1em',
    transition: 'transform 0.3s ease',
  },
  contentPreview: {
    marginBottom: '10px',
    color: '#555',
  },
  deletePostButton: {
    backgroundColor: '#c0392b',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  addPostButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#af4669',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '50%',
    fontSize: '1.5em',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    animation: 'bounce 2s infinite',
  },
  modal: {
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '500px',
    animation: 'modalFadeIn 0.5s ease',
  },
  modalTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#333',
  },
  modalTextarea: {
    width: '100%',
    height: '150px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '20px',
    fontSize: '1em',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '1.5em',
    background: 'none',
    border: 'none',
    color: '#333',
    cursor: 'pointer',
  },
  saveButton: {
    backgroundColor: '#88524c',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1em',
  },
};



export default BlogNeonSongs;
