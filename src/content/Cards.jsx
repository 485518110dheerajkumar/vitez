import React from 'react'

function Cards() {
  return (<>
  <div className="card-title p-5 text-center bg-zinc-800">
    <h2 className='text-3xl '><span className='text-red-500 underline uppercase font-bold text-5xl ml-2'>T</span>oday's <span className='text-red-500 underline uppercase font-bold text-5xl ml-2'>O</span>ffers</h2>
  </div>


  <div className='flex flex-wrap space-x-5 space-y-5 justify-center bg-slate-900 p-5'>
  <a href="/Fashion">
  <div className="card bg-base-100 h-96 w-80 shadow-xl mt-5 ml-5 cursor-pointer">
  <figure>
    <img
      src="./public/images/fasion_men.jpeg"
      alt="Shoes" className='h-60 w-full' />
    
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Fashion !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
   
</div>
</a>
<a href="/Furniture">
<div className="card bg-base-100 w-80 h-96 shadow-xl cursor-pointer">
  <figure>
    <img
      src="./public/images/furniture_offer.jpg"
      alt="Shoes" className='h-60 w-full' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Farnichar !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</a>
<a href="/Electronic">
<div className="card bg-base-100 h-96 w-80 shadow-xl cursor-pointer">
  <figure>
    <img
      src="./public/images/mac_mobile.png"
      alt="IQoo Smart Phone" className='h-60 w-full' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
    Mac Mobiles !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</a>
<a href="/Electronic"> 
<div className="card bg-base-100 h-96 w-80 shadow-xl cursor-pointer">
  <figure>
    <img
      src="./public/images/ear_phone.jpg"
      alt="Shoes" className='h-60 w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Ear Phone!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</a>
<a href="/Beauty"> 
<div className="card bg-base-100 h-96 w-80 shadow-xl cursor-pointer">
  <figure>
    <img
      src="./public/images/beauty_product_offer.jpeg"
      alt="Shoes" className='h-60 w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Beauty Products !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</a>
<a href="/Electronic"> 
<div className="card bg-base-100 h-96 w-80 shadow-xl cursor-pointer">
  <figure>
    <img
      src="./public/images/nothing.jpeg"
      alt="Shoes" className='h-60 w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Nothing !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</a>
<a href="/Electronic"> 
<div className="card bg-base-100 h-96 w-80 shadow-xl cursor-pointer">
  <figure>
    <img
      src="./public/images/motorola.jpeg"
      alt="iphone" className='h-60 w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Motorola !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
</a>
</div>
  </>
     
  )
}

export default Cards