// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Unavbar = () => {
  const get = localStorage.getItem('user');
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "blue" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/uhome' style={{ color: 'white', textDecoration: "none" }}>BookStore</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{marginLeft: "auto"}}>
            <Link to="/uhome" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Home</Link>
            <Link to="/uproducts" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Books</Link>
            <Link to="/wishlist" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Wishlist</Link>
            <Link to="/myorders" style={{ padding: "10px", color: "white", textDecoration: "none" }}>My orders</Link>
            <Link to="/" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Logout</Link>
            <span style={{ color: "white", paddingTop: "0px", marginLeft: "10px" }}>
              {get && `(${JSON.parse(get).name})`}
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
