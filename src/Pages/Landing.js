import React from 'react';
import '../App.css';
import LandingNavbar from '../Components/LandingNavbar';
import Footer from '../Components/Footer';
import  'bootstrap/dist/css/bootstrap.min.css';
import LandingCarousel from '../Components/LandingCarousel';
import LandEmail from '../Components/LandingEmail';
import WorksLanding from '../Components/BodyLanding';
import VideoSec from '../Components/VideoSection';



function Landing() {
    return (
      <>
      <LandingNavbar />
      <LandingCarousel />
      <LandEmail />
      <WorksLanding />
      <VideoSec/>
      <Footer/>

      </>
    );
  }
  
  export default Landing;