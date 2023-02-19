import React from 'react';
import '../App.css';
import '../index.css';
import LandingNavbar from '../Components/LandingNavbar';
import  'bootstrap/dist/css/bootstrap.min.css';
import LandingCarousel from '../Components/LandingCarousel';
import LandEmail from '../Components/LandingEmail';
import WorksLanding from '../Components/BodyLanding';
import VideoSec from '../Components/VideoSection';
import Footer from '../Components/Footer';


{/* 
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import SectionHome from '../Components/SectionHome'
 */}

function Home() {
  return (
    <>
      <LandingNavbar />
      <LandingCarousel />
      <LandEmail />
      <WorksLanding />
      <VideoSec/>
      <Footer/>



{/* Home Page 
    <Navbar />
    <Carousel/>
    <SectionHome/>
    <Footer/>
      
  */}

    </>
  );
}

export default Home;
