import React from 'react'

function Sliders() {
  return (<>
  <div >
  <div className="carousel w-full mt-4">
  <div id="item1" className="carousel-item w-full cursor-pointer">
    <img
      src="./public/images/mobile_web_banner.png"
      className="w-full h-96" />
  </div>
  <div id="item2" className="carousel-item w-full cursor-pointer">
    <img
      src="./public/images/beauty.png"
      className="w-full h-96" />
  </div>
  <div id="item3" className="carousel-item w-full cursor-pointer">
    <img
      src="./public/images/women_cloths.png"
      className="w-full h-96" />
  </div>
  <div id="item4" className="carousel-item w-full cursor-pointer">
    <img
      src="./public/images/electronic_offer.png"
      className="w-full h-96" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
  </div>
  </>
     
  );
}

export default Sliders;