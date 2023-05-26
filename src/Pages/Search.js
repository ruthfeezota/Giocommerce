import React from 'react';
import '../App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import SearchCard from '../Components/SearchCard';
import SearchBar from '../Components/SearchBar';
import SearchNavbar from '../Components/SearchNavbar';
import SearchFilter from '../Components/SearchFilter'






function Search() {
  return (
    <>
      <SearchNavbar />
      <SearchBar/>
      <SearchCard />
      <Footer/>
      
    </>
  );
}

export default Search;
