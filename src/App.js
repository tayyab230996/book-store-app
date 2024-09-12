import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import PlaylistPage from "./pages/PlaylistPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import Spinner from "./components/Spinner";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [playlist, setPlaylist] = useState(() => {
    const savedPlaylist = localStorage.getItem("playlist");
    return savedPlaylist ? JSON.parse(savedPlaylist) : [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [playlist]);

  const addToPlaylist = (book) => {
    setPlaylist((prevPlaylist) => {
      if (!prevPlaylist.some((item) => item.isbn13 === book.isbn13)) {
        return [...prevPlaylist, book];
      }
      return prevPlaylist;
    });
  };

  const removeFromPlaylist = (isbn13) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((book) => book.isbn13 !== isbn13)
    );
  };

  return (
    <Router>
      <div className="app-container">
        <NavBar onSearch={setSearchQuery} />

        {loading && <Spinner />}

        <Routes>
          <Route
            path="/"
            element={
              <Main
                searchQuery={searchQuery}
                onAddToPlaylist={addToPlaylist}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/playlist"
            element={
              <PlaylistPage
                playlist={playlist}
                onRemoveFromPlaylist={removeFromPlaylist}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/book/:isbn13"
            element={<BookDetailsPage setLoading={setLoading} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
