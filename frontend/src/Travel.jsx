import React from 'react'
import Navbar from './content/Navbar'
import Footer from './content/Footer'
import Card2 from './Card2'
function Travel() {
  return (
    <>
    <div className='bg-slate-50'>
    <Navbar/>
    <div className='mt-12 text-center justify-center items-center flex'>
       <h1 className='text-3xl font-bold text-amber-500'><span className='text-orange-600 underline'>T</span>ravel Trips</h1>
       <span className='ml-2 text-red-600 font-bold'> :-)</span>
    
    </div>
    <div className='text-center justify-center items-center p-3'>
        <p className='text-cyan-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quo ducimus reprehenderit provident incidunt asperiores facilis aliquid sequi dolorem! Nihil ratione totam at maxime, quis fugit laboriosam natus veritatis molestiae?</p>
   </div>
   <div className='justify-center text-center items-center'><a href="/">
   <button className="btn btn-secondary text-xl hover:text-white"> Back</button>
   </a>
   </div>
    <div className='mt-7 w-full'>
     <Card2/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Travel
