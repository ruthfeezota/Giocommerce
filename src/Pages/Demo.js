import React from 'react';
import '../App.css';
import LandingNavbar from '../Components/LandingNavbar';
import  'bootstrap/dist/css/bootstrap.min.css';
import Demo from '../Components/DemoForm'
import Footer from '../Components/Footer';





function DemoL() {
    return (
      <>
      <LandingNavbar />
      <Demo/>
     
      <Footer/>

      </>
    );
  }
  
  export default DemoL;