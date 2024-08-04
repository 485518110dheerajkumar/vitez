import React from 'react'
import Navbar from './content/Navbar';
import Sliders from './content/Sliders';
import Cards from './content/Cards';
import Footer from './content/Footer';
import Electronicoffers from './content/Electronicoffers';



function Homepage() {
  return (
     <>
      <Navbar/>
      <Sliders/>
      <Cards/>
      <Electronicoffers/>
      
      <Footer/>
     </>
  );
}

export default Homepage