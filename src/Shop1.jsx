import React from 'react'
import Navbar from './content/Navbar'
import Footer from './content/Footer'
import Card2 from './Card2'
import Card3 from './card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'
function Shop1() {
  return (
     <>
     <Navbar/>
     <div className="mt-3">
      <div className="">
        <Card2/>
      </div>
       
      <div className="">
      <Card3/>
      </div>
      <div className="">
      <Card4/>
      </div>
      <div className="">
      <Card5/>
      </div>
      <div className="">
      <Card6/>
      </div>
     </div>
     

     <Footer/>
     </>
  )
}

export default Shop1