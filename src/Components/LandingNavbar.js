import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../GiocommerceLogo.png'
import { Link } from 'react-router-dom'

function landingNavbar() {
  return (
    <>
      <Navbar bg="black" variant="dark" fixed="top" className='py-2 h5'>
        <Container>
        <Navbar.Brand >
        <Link to="/">
        <img width="260px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
        </Link>
        </Navbar.Brand>
          <Navbar.Brand href="/" className="ms-3">HOME</Navbar.Brand>
          <Nav className="me-auto ms-3">
            <Nav.Link href="/">MANUFATURES</Nav.Link>
            <Nav.Link href="/" className="me-auto ms-3">REGIONS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/Login" className="text-warning">REQUEST A DEMO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

  );
}

export default landingNavbar;