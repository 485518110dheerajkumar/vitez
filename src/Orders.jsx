import React from 'react'
import Navbar from './content/Navbar'
import Footer from './content/Footer'
import Card2 from './Card2'
function Orders() {
  return (
    <>
<div className='bg-slate-100 bg-no-repeat bg-cover'  style={{
    backgroundImage: "url(https://i.pinimg.com/564x/75/98/19/759819a4cce0f0310e96c7c1b4167e7e.jpg)",
    
  }}>
<Navbar/>
<div className='text-center justify-center items-center flex'>  
<div className="flex w-full">
  <div className="flex flex-grow place-items-center w-40 mt-3 h-full">
  <ul className="menu bg-base-200 lg:menu-vertical">
  <li>
    <a href='./'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Home
      <span className="badge badge-sm">99+</span>
    </a>
  </li>
  <li>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Updates
      <span className="badge badge-sm badge-warning">NEW</span>
    </a>
  </li>
  <li>
    <a>
      Stats
      <span className="badge badge-xs badge-info"></span>
    </a>
  </li>
</ul>
    </div>
   
  <div className="grid flex-grow place-items-center h-80 bg-no-repeat">
    <div>
     
 
    </div>
    </div>
    </div>
    </div>
     
    <Footer/>
    </div>
    </>
  )
}

export default Orders