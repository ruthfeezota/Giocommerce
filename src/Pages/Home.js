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
      <h1 className='hidden content'>Woaom is a Advanced procurement technology empowering African Manufacturing and Logistics sectors.</h1>
      <p className='hidden content'>Welcome to our user-friendly procurement application! We are dedicated to supporting the mission of the African Continental Free Trade Area (AfCFTA) by promoting increased trade within Africa.
Our application offers a seamless experience with a range of features to facilitate your procurement process. You can easily inquire about products, make purchases, and track your orders effortlessly. In the event of any issues, our application allows you to raise disputes for prompt resolution.
At our core, we prioritize fostering strong business relationships and encouraging the development of efficient intracontinental logistics routes. We believe that by facilitating smoother trade transactions and enhancing connectivity across the continent, we can contribute to the growth and success of businesses participating in AfCFTA.
Join us today and experience the convenience and benefits of our user-friendly procurement application as we work together to promote trade and economic prosperity throughout Africa.</p>

    </>
  );
}

export default Home;
