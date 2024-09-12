import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCog,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Form, Button, FormControl, Navbar } from "react-bootstrap";

const NavBar = ({ onSearch }) => {
  const [isTopicsOpen, setTopicsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  // Toggle dropdown function
  const toggleTopicsDropdown = () => {
    setTopicsOpen(!isTopicsOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate("/");
    }
  };

  const handleItemClick = (value) => {
    console.log("event", value);
    onSearch(value);
    setSelectedValue(value);
    handleSearch(value);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <Navbar.Brand className={styles.logo} href="/">
          <img
            href="/"
            src="https://cdn.freelogovectors.net/wp-content/uploads/2022/06/oreilly-logo-freelogovectors.net_.png" // Adjust the path to your local or hosted O'Reilly logo.
            alt="O'Reilly"
          />
        </Navbar.Brand>
        <ul className={styles.navLinks}>
          <li className={styles.dropdown}>
            <button
              onClick={toggleTopicsDropdown}
              className={styles.dropdownToggle}
            >
              Topics <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {/* Dropdown menu */}
            {isTopicsOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <a href="#" onClick={() => handleItemClick("Database")}>
                    Cloud Computing
                  </a>
                </li>
                <li>
                  <a href="#">Data Engineering</a>
                </li>
                <li>
                  <a href="#">Data Science</a>
                </li>
                <li>
                  <a href="#">AI & ML</a>
                </li>
                <li>
                  <a href="#">Programming Languages</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">Featured</a>
          </li>
          <li>
            <a href="/playlist">Playlist</a>
          </li>
        </ul>
      </div>

      <Form inline onSubmit={handleSearch} className={styles.searchContainer}>
        <FormControl
          type="text"
          placeholder="Search 50,000+ courses, events, titles, and more"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchBar}
        />
        <Button
          variant="outline-dark"
          type="submit"
          className={styles.searchButton}
        >
          <FaSearch />
        </Button>
      </Form>

      <div className={styles.rightSection}>
        <FontAwesomeIcon icon={faCog} className={styles.icon} />
        <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />
      </div>
    </nav>
  );
};

export default NavBar;
