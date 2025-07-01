// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Anavbar = () => {
  const get = localStorage.getItem('user');
  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "blue" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/ahome' style={{ color: 'white', textDecoration: "none" }}>BookStore(Admin)</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{marginLeft: "auto"}}>
            <Link to="/ahome" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Home</Link>
            <Link to="/users" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Users</Link>
            <Link to="/sellers" style={{ padding: "10px", color: "white", textDecoration: "none" }}>Sellers</Link>
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

export default Anavbar;
