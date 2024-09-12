import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/BookCard.css';

const BookCard = ({ book, onAddToPlaylist, onViewDetails }) => {
  const [isAdded, setIsAdded] = useState(false); // State to manage button click
  const [imageLoaded, setImageLoaded] = useState(false); 

  const handleAddToPlaylist = (e) => {
    e.stopPropagation();
    onAddToPlaylist(book);
    setIsAdded(true); // Mark as added
  };

  const handleImageLoad = () => {
    setImageLoaded(true); // Set imageLoaded to true when the image loads
  };

  const handleImageError = () => {
    setImageLoaded(true); // Set to true to hide loading if there's an error
  };

  return (
    <Card className="book-card" onClick={() => onViewDetails(book.isbn13)}>
    {/* Image Wrapper */}
    <div className="image-container">
      {!imageLoaded && <div className="loading-text">Loading...</div>} {/* Loading Text */}
      <Card.Img
        variant="top"
        src={book.image}
        alt={book.title}
        className={`book-image ${imageLoaded ? 'visible' : 'hidden'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    </div>
    <Card.Body className="book-details">
      <Card.Title className="book-title">{book.title}</Card.Title>
      <Card.Text className="book-price">{book.price}</Card.Text>
      <Button
        variant="primary"
        className={`playlist-button ${isAdded ? 'added-to-playlist' : ''}`}
        onClick={handleAddToPlaylist}
        disabled={isAdded} // Disable button if already added
      >
        {isAdded ? 'Added' : 'Add to Playlist'}
      </Button>
    </Card.Body>
  </Card>
  );
};

export default BookCard;
