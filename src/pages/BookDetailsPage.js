import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBook } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "react-bootstrap";
import styles from "../styles/BookDetail.module.css";

const BookDetailsPage = () => {
  const { isbn13 } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.itbook.store/1.0/books/${isbn13}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [isbn13]);

  if (loading) return <Spinner animation="border" />;

  return (
    <div className={styles.bookDetailsContainer}>
      {loading && <Spinner />}
      <div className={styles.bookDetailsCard}>
        {/* Book image */}
        <div className={styles.bookImage}>
          <img src={book.image} alt={book.title} />
        </div>

        {/* Book Info */}
        <div className={styles.bookInfo}>
          <h1 className={styles.bookTitle}>{book.title}</h1>
          <p className={styles.bookAuthors}>by {book.authors}</p>
          <p className={styles.bookSubtitle}>{book.subtitle}</p>

          <div className={styles.bookMeta}>
            <div className={styles.ratingSection}>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={
                    index < book.rating ? styles.starFilled : styles.starEmpty
                  }
                />
              ))}
              <span className={styles.ratingCount}>{book.rating || "N/A"}</span>
            </div>

            <div className={styles.pagesSection}>
              <FontAwesomeIcon icon={faBook} className={styles.bookIcon} />
              <span>{book.pages} pages</span>
            </div>

            <div className={styles.publisherSection}>
              <span>{book.publisher}</span>,
              <span className={styles.publishDate}>{book.year}</span>
            </div>
          </div>

          <p className={styles.bookDescription}>
            {book.desc}
            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.more}
            >
              More
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
