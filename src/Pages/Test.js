import React from 'react';
import '../App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import SearchNavbar from '../Components/SearchNavbar';
import Test from '../Components/Test';






function Search() {
  return (
    <>
      <SearchNavbar />
      <Test/>

      <Footer/>
      
    </>
  );
}

export default Search;
