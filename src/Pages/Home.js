import React from 'react';
import '../App.css';
import '../index.css';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import SectionHome from '../Components/SectionHome'
import Footer from '../Components/Footer';



function Home() {
  return (
    <>
    <Navbar />
    <Carousel/>
    <SectionHome/>
    <Footer/>
      
    </>
  );
}

export default Home;
