import React from 'react'

export default function Signin() {
  return (
    <>
  <div
  className="hero min-h-screen opacity-95"
  style={{
    backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20220906/pngtree-cool-wave-liquid-background-for-landing-page-website-image_1463455.jpg)",
  }}>
  <div className="flex w-full flex-col lg:flex-row">
  <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:ml-20">
      <h1 className="text-5xl font-bold text-pink-900 drop-shadow-xl p-5">Signin now!</h1>
      <p className="py-6 text-pink-900 shadow-xl">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl opacity-90">
      <form className="card-body">
      <div className="form-control">
      <label className="label">
            <span className="label-text">Username</span>
          </label>
      <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" />
</label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" />
</label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" />
</label>
           
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>


        <label className="label justify-center">
            <span className="label-text">or</span>
          </label>
        <div className=" mt-6">
        <button className="btn btn-primary bg-white w-full"><span><img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/google_logo_icon_147282.png " alt="google logo" className='h-11 w-12 rounded-sm '/></span><span className='text-black font-bold text-base'>Google</span></button>
        </div>
      </form>
    </div>
  </div>
</div>

  </div>
  </div>
    </>
  )
}
