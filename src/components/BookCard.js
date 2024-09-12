import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/BookCard.css";

const BookCard = ({ book, onAddToPlaylist, onViewDetails }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToPlaylist = (e) => {
    e.stopPropagation();
    onAddToPlaylist(book);
    setIsAdded(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(true);
  };

  return (
    <Card className="book-card" onClick={() => onViewDetails(book.isbn13)}>
      <div className="image-container">
        {!imageLoaded && <div className="loading-text">Loading...</div>}
        <Card.Img
          variant="top"
          src={book.image}
          alt={book.title}
          className={`book-image ${imageLoaded ? "visible" : "hidden"}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
      <Card.Body className="book-details">
        <Card.Title className="book-title">{book.title}</Card.Title>
        <Card.Text className="book-price">{book.price}</Card.Text>
        <Button
          variant="primary"
          className={`playlist-button ${isAdded ? "added-to-playlist" : ""}`}
          onClick={handleAddToPlaylist}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to Playlist"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
