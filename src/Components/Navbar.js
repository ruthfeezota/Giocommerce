import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../GiocommerceLogo.png'
import { Link } from 'react-router-dom'

function newNavbar() {
  return (
    <>
      <Navbar bg="black" variant="dark" fixed="top" className='py-4 h5'>
        <Container>
        <Navbar.Brand >
        <Link to="/">
        <img width="260px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
        </Link>
        </Navbar.Brand>
          <Navbar.Brand href="/">HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">MANUFATURES</Nav.Link>
            <Nav.Link href="/">REGIONS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login" className="text-primary">SIGNIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  );
}

export default newNavbar;