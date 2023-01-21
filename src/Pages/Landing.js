import React from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import  'bootstrap/dist/css/bootstrap.min.css';
import LandingCarousel from '../Components/LandingCarousel';
import landingEmail from '../Components/landingEmail';


function Landing() {
    return (
      <>
      <Navbar />
      <LandingCarousel />
      <landingEmail />
      <Footer/>

      </>
    );
  }
  
  export default Landing;