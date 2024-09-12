import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Dropdown,
  Nav,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import "../styles/NavBar.css";

const NavBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  console.log(selectedValue)

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate("/");
    }
  };

  const handleItemClick = (value) => {
    setSelectedValue(value);
    handleSearch(value);
  };

  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Navbar.Brand href="/" className="navbar-brand">
        <img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2022/06/oreilly-logo-freelogovectors.net_.png" // Adjust the path to your local or hosted O'Reilly logo.
          alt="O'Reilly"
          className="oreilly-logo"
        />
      </Navbar.Brand>

      <Nav className="ml-auto">
        <Dropdown className="hover-dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Select a Value
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleItemClick("Value 1")}>
              Value 1
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("Value 2")}>
              Value 2
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleItemClick("Value 3")}>
              Value 3
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link href="/playlist" className="nav-link">
          Playlist
        </Nav.Link>
      </Nav>

      <Form inline onSubmit={handleSearch} className="search-form mx-auto">
        <FormControl
          type="text"
          placeholder="Search 50,000+ courses, events, titles, and more"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mr-sm-2 search-input"
        />
        <Button variant="outline-dark" type="submit" className="search-button">
          <FaSearch />
        </Button>
      </Form>

      <FaUserCircle className="profile-icon" />
    </Navbar>
  );
};

export default NavBar;
