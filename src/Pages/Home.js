import React from 'react';
import '../App.css';
import '../index.css';
import LandingNavbar from '../Components/LandingNavbar';
import  'bootstrap/dist/css/bootstrap.min.css';
import LandingCarousel from '../Components/LandingCarousel';
import LandEmail from '../Components/LandingEmail';
import WorksLanding from '../Components/BodyLanding';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <LandingNavbar />
      <LandingCarousel />
      <WorksLanding />
      <LandEmail />
      {/*<VideoSec/> */}

      <Footer/>

    </>
  );
}

export default Home;
