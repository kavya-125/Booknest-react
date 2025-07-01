// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container, Card } from 'react-bootstrap'; // <-- Add Card here
import { Link } from "react-router-dom";
import Footer from './Footer'; // <-- Add this if Footer is your own component

const Home = () => {

  return (
    <div>
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "navy" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/' style={{ color: 'white', textDecoration: "none", fontSize: "2rem" }}>BookStore</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
            <Link to="/login" style={{ padding: "10px", color: "white", textDecoration: "none", fontSize: "1.2rem" }}>User</Link>
            <Link to="/slogin" style={{ padding: "10px", color: "white", textDecoration: "none", fontSize: "1.2rem" }}>Seller</Link>
            <Link to="/alogin" style={{ padding: "10px", color: "white", textDecoration: "none", fontSize: "1.2rem" }}>Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <h1 className='text-center' style={{fontSize:'50px'}}>Best Seller</h1>
      <div style={{display:'flex',justifyContent:'center'}}>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card style={{ width: '18rem', marginRight:'80px' }}>
            <Link to='/login'>
              <Card.Img variant='top' src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1524451661i/39924789.jpg' />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>RICH DAD<br/> POOR DAD</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', marginRight:'80px' }}>
            <Link to='/login'>
              <Card.Img variant='top' src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1463241782i/30186948.jpg' />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>TNINK AND<br/> GROW RICH</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem', marginRight:'80px' }}>
            <Link to='/login'>
              <Card.Img variant='top' src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674147285i/80830635.jpg' />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'>DON'T LET HER STAY</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Link to='/login'>
              <Card.Img variant='top' src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675642559i/65214203.jpg' />
            </Link>
            <Card.Body>
              <Card.Title className='text-center'> KILLING THE WITCHES</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        <h1 className='text-center' style={{fontSize:'50px'}}>Top Recomendation</h1>
        <div style={{display:'flex',justifyContent:'center'}}>
          <br/>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Card style={{ width: '18rem', marginRight:'80px' }}>
              <Link to='/login'>
                <Card.Img variant='top' src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251.jpg' />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>HARRY POTTER</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginRight:'80px' }}>
              <Link to='/login'>
                <Card.Img variant='top' src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692288251i/122765395.jpg' />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>ELON MUSK </Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginRight:'80px' }}>
              <Link to='/login'>
                <Card.Img variant='top' src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544102229i/42983957.jpg' />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>THE MOSQUITO</Card.Title>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Link to='/login'>
                <Card.Img variant='top' src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347493537i/1979210.jpg' />
              </Link>
              <Card.Body>
                <Card.Title className='text-center'>JOURNEY ON THE JAMES</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <br/>
      <Footer/>
    </div>
    </div>
  );
};

export default Home;
