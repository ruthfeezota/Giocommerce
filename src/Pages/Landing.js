import React from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import  'bootstrap/dist/css/bootstrap.min.css';
import LandingCarousel from '../Components/LandingCarousel';
import landingSectionEmail from '../Components/landingSectionEmail'

function Landing() {
    return (
      <>
      <Navbar />
      <LandingCarousel />
      <landingSectionEmail />
      <Footer/>

      </>
    );
  }
  
  export default Landing;