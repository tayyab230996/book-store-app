// src/components/Pagination.js
import React from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow  } from "react-icons/bi";
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems }) => {
  const getPageNumbers = () => {
    const maxPageNumbers = 5;
    const halfRange = Math.floor(maxPageNumbers / 2);
    let startPage = Math.max(1, currentPage - halfRange);
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (endPage - startPage < maxPageNumbers - 1) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);
  };

  const pageNumbers = getPageNumbers();

  
  // const startItem = (currentPage - 1) * itemsPerPage + 1;
  // const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination-container">
      {/* Display Range like '1-10 of 207' */}
      {/* <div className="pagination-summary">
        {`${startItem}-${endItem} of ${totalItems}`}
      </div> */}
      
      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button
          className="pagination-arrow"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {/* {'<'} */}
          <BiSolidLeftArrow />
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`pagination-number ${currentPage === page ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          className="pagination-arrow"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {/* {'>'} */}
          <BiSolidRightArrow />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
