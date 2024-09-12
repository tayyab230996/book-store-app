// src/components/PlayList.js
import React from 'react';
import '../styles/PlayList.css';

const PlayList = ({ playlist, onRemoveFromPlaylist }) => {
  return (
    <div className="playlist">
      <h1>Your Playlist</h1>
      {playlist.length === 0 ? (
        <p>No books in your playlist</p>
      ) : (
        <ul>
          {playlist.map((book) => (
            <li key={book.isbn13}>
              {book.title}
              <button onClick={() => onRemoveFromPlaylist(book.isbn13)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlayList;
