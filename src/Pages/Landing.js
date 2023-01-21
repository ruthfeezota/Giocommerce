import React from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import  'bootstrap/dist/css/bootstrap.min.css';
import LandingCarousel from '../Components/LandingCarousel';
import LandEmail from '../Components/LandingEmail';
import WorksLanding from '../Components/BodyLanding';
import VideoSec from '../Components/VideoSection';



function Landing() {
    return (
      <>
      <Navbar />
      <LandingCarousel />
      <LandEmail />
      <WorksLanding />
      <VideoSec/>
      <Footer/>

      </>
    );
  }
  
  export default Landing;