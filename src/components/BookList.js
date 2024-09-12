// src/components/BookList.js
import React, { useState } from 'react';
import { FaThLarge, FaThList } from 'react-icons/fa';
import BookCard from './BookCard';
import '../styles/BookList.css';

const BookList = ({ books, onAddToPlaylist, onViewDetails }) => {
  const [view, setView] = useState('grid');

  return (
    <div>
      <div className="view-toggle">
        <FaThLarge className={`toggle-icon ${view === 'grid' ? 'active' : ''}`} onClick={() => setView('grid')} />
        <FaThList className={`toggle-icon ${view === 'list' ? 'active' : ''}`} onClick={() => setView('list')} />
      </div>
      <div className={`book-list ${view}`}>
        {books.map((book) => (
          <BookCard
            key={book.isbn13}
            book={book}
            onAddToPlaylist={onAddToPlaylist}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
