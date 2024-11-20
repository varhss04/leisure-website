import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Leisure from "./leisure";
import About from "./about";
import Login from "./login";
import Signup from "./signup";
import Aesthetic from "./aesthetic";
import Vibe from "./vibe";
import BlogLightMovies from "./BlogLightMovies.js";
import BlogLightBooks from "./BlogLightBooks.js";
import BlogDarkBooks from "./BlogDarkBooks.js";
import BlogDarkMovies from "./BlogDarkMovies.js";
import BlogDarkSongs from "./BlogDarkSongs.js";
import BlogLightSongs from "./BlogLightSongs.js";
import BlogNeonMovies from "./BlogNeonMovies.js";
import BlogNeonBooks from "./BlogNeonBooks.js";
import BlogNeonSongs from "./BlogNeonSongs.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Leisure />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aesthetic" element={<Aesthetic />} />
        <Route path="/vibe" element={<Vibe />} />
        <Route path="/blog" element={<BlogSelector />} />
      </Routes>
    </Router>
  );
}

// BlogSelector Component
function BlogSelector() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const vibe = params.get("vibe");
  const aesthetic = params.get("aesthetic");

  if (vibe === "movies" && aesthetic === "dark") {
    return <BlogDarkMovies />;
  } else if (vibe === "movies" && aesthetic === "light") {
    return <BlogLightMovies />;
  } else if (vibe === "books" && aesthetic === "dark") {
    return <BlogDarkBooks />;
  } else if (vibe === "books" && aesthetic === "light") {
    return <BlogLightBooks />;
  } else if (vibe === "songs" && aesthetic === "dark") {
    return <BlogDarkSongs />;
  } else if (vibe === "songs" && aesthetic === "light") {
    return <BlogLightSongs />;
  } else if (vibe === "movies" && aesthetic === "neon") {
    return <BlogNeonMovies />;
  } else if (vibe === "books" && aesthetic === "neon") {
    return <BlogNeonBooks />;
  } else if (vibe === "songs" && aesthetic === "neon") {
    return <BlogNeonSongs />;
  } else {
    return <div>Page Not Found</div>;
  }
}

export default App;
