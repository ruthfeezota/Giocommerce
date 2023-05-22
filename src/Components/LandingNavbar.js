import React from 'react';
import Logo from '../GiocommerceLogo.png'
import { Link } from 'react-router-dom'

function landingNavbar() {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark bg-black">
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
                <a className="nav-link text-white" href="#">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">MANUFATURES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">REGIONS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="/Demo">REQUEST A DEMO</a>
              </li>
            </ul>
          </div>
        </nav>
    {/* 

    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';


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
            <Nav.Link href="/Demo" className="text-warning">REQUEST A DEMO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      */}
    </>

  );
}

export default landingNavbar;