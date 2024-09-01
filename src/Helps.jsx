import React from 'react'
import Help from './content/Help'
import Navbar from './content/Navbar'
import Footer from './content/Footer'
function About() {
  return (
     <>
     <Navbar/>
     <div className=' bg-slate-200'>
     <Help/>
     </div>
      
     <Footer/>
     </>
  );
}

export default About