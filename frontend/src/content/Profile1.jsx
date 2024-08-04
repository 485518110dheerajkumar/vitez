import React from 'react'

function Profile1() {
  return (
     <>
     <div className="mt-2 justify-center items-center text-center">
      <div className="">


      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left ml-5">
      <h1 className="text-5xl font-bold">Profile</h1>
      <p className="py-6">
         <img src="./public/images/user_image.png" alt="User image" 
         className='rounded-full h-52 w-72'/>
      </p>
      <input type="file" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">USER NAME</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered border-t-0 border-l-0 border-r-0"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">EMAIL</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered border-t-0 border-l-0 border-r-0"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">LOCATION</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered border-t-0 border-l-0 border-r-0"/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PHONE</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered border-t-0 border-l-0 border-r-0"/>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Save</button>
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

export default Profile1