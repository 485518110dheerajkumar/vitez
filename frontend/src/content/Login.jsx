import React from 'react'

export default function Login() {
  return (
    <>
      <div className='hero min-h-screen' style={{
    backgroundImage: "url(https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=ais_user)",
  }}>
        
  <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left lg:ml-20">
      <h1 className="text-5xl font-bold text-white"> Login now!</h1>
      <p className="py-6 text-white">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-red-50 w-full max-w-sm shrink-0 shadow-2xl opacity-75">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-bold text-base">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-bold text-base">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-black font-bold text-base">Forgot password?</a>
            <a href="/Signin" className='text-right label-text-alt link link-hover text text-black font-bold text-base'>Signin</a>
          </label>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary  text-black font-bold text-base">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
      </div>
    </>
  )
}
