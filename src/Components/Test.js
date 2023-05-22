import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../GiocommerceLogo.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </header>

      <main>
        <section className="hero-section">
          <div className="container text-center">
            <h1>Welcome to My Website</h1>
            <p>This is a simple landing page built with React and Bootstrap 5.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </section>

        <section className="about-section">
          <div className="container">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis mollis quam, at malesuada erat porta a. Nullam lacinia, dui ut pellentesque facilisis, neque nulla placerat ex, in sollicitudin turpis tortor ut felis.</p>
          </div>
        </section>

        <section className="services-section">
          <div className="container">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis mollis quam, at malesuada erat porta a. Nullam lacinia, dui ut pellentesque facilisis, neque nulla placerat ex, in sollicitudin turpis tortor ut felis.</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis mollis quam, at malesuada erat porta a. Nullam lacinia, dui ut pellentesque facilisis, neque nulla placerat ex, in sollicitudin turpis tortor ut felis.</p>
          </div>
        </section>
      </main>

      <footer className="text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;