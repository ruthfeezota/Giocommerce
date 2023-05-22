import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../GiocommerceLogo.png'
import { Link } from 'react-router-dom'

function newNavbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
        <img width="260px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
        </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
    {/*comment here
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
     */}
    </>

    

  );
}

export default newNavbar;