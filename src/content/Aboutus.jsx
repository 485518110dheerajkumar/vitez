import React from 'react'
// import About from '../Comunity/About';
 
function Shop() {
  return (
    <>
  <div>
   <div className="bg-base-100 grid place-items-center p-2">
      <video autoPlay src="./public/images/ADvideo.mp4" className='w-full mt-5 mb-3'></video>
  </div>
   <div>
   <div className="flex w-full flex-col lg:flex-row">
  <div className="bg-base-300 grid flex-grow place-items-center">
  <img src="https://www.extensiv.com/hubfs/Skubana/Blog%20Pages/Imported_Blog_Media/ecommerce%20employees-2-Oct-12-2022-05-40-08-83-PM.jpg" alt="Staf image" 
    className='p-2'/>
  </div>
   
  <div className="bg-base-300 grid flex-grow place-items-center p-2 text-center">
  <span className='text-5xl '>The VITEZ</span> 
  <span className='text-xl p-5 '>The VITEZ is one of India's leading digital commerce entities and includes VIT Bhopal, VIT Chenni, VIT Amravati, VIT Vellore
  and many colleges are connected through this website.</span>
  </div>
</div>
 </div>
   
 
<hr className='text-base-300'/>
<div>
   <div className="flex w-full flex-col lg:flex-row">
  <div className="bg-base-300 grid flex-grow place-items-center">
  <img src="https://m.economictimes.com/thumb/msid-56282555,width-1200,height-900,resizemode-4,imgsize-1033635/innovative-ideas-will-continue-to-get-funded-even-as-entrepreneurs-hunker-down-to-seek-out-paths-to-profits.jpg" alt="inovative images" 
    className='p-2'/>
  </div>
   
  <div className="bg-base-300 grid flex-grow place-items-center p-2 text-center">
  <span className='text-2xl'>TECHNOLOGY AT VITEZ</span>
     <span className='text-5xl p-2'>INNOVATION</span>
    <p className='p-2'>VITEZ technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers,
       besides making the online shopping experience convenient, intuitive and seamless.</p>
  </div>
</div>
 </div>




</div>     
    </>
  );
}

export default Shop