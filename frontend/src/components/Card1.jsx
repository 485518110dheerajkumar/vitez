// src/components/Card.jsx
import React from 'react';

const Card1 = ({ title, description, imageUrl }) => {
   
  return (
    <>
 
  <div className='p-2 mt-2'>
  <div className="card max-w-70 bg-white  hover:bg-slate-100 duration-200">
  <figure>
    <img
      src={imageUrl}
      alt = {title} className='h-56 w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" >Add To Cart</button>
    </div>
  </div>
</div>
 </div>
 
    </>
     
  );
};

export default Card1;
