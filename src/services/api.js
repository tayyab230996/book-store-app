// src/services/api.js
import axios from "axios";

const BASE_URL = "https://api.itbook.store/1.0";

export const fetchNewBooks = () => axios.get(`${BASE_URL}/new`);

export const searchBooks = (query, page = 1) =>
  axios.get(`${BASE_URL}/search/${query}/${page}`);

export const fetchBookDetails = (isbn13) =>
  axios.get(`${BASE_URL}/books/${isbn13}`);
