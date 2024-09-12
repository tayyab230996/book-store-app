import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchNewBooks, searchBooks } from "../services/api";
import BookList from "../components/BookList";
import Pagination from "../components/Pagination";

const Main = ({ searchQuery, onAddToPlaylist, setLoading }) => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = searchQuery
          ? await searchBooks(searchQuery, currentPage)
          : await fetchNewBooks();
        setBooks(response.data.books);
        setTotalPages(Math.ceil(response.data.total / 10));
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchQuery, currentPage, setLoading]);

  const handleViewDetails = (isbn13) => {
    navigate(`/book/${isbn13}`);
  };

  return (
    <div>
      <BookList
        books={books}
        onAddToPlaylist={onAddToPlaylist}
        onViewDetails={handleViewDetails}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Main;
