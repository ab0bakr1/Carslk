import React, { useState } from 'react'
import "./User.css"
import UserImg from "./../../../IMG/user-in.png"

function User() {
  const [Overlay, setOverlay] = useState("overlay");
  const [Login , setLogin] = useState("login");
  const [Name , setName] = useState({name:""});
  const handleUser=()=>{
    Login === "login" ? setLogin("login active") : setLogin("login");
    Overlay === "overlay" ? setOverlay ("overlay active") : setOverlay("overlay");
  }
  const handleSubmit = e =>{
    e.preventDefault();
  }
  return (
    <>
      <button onClick={handleUser} className='user'>
          <div className='user-img'>
              <img src={UserImg}></img>
          </div>
          <div className='user-name'>
              <h6>{Name.name}</h6>
          </div>
      </button>
      <div className={Login}>
        <form onSubmit={handleSubmit} className='px-2'>
          <h6 className='m-0 pt-4'>Username</h6>
          <input className='w-100 p-2' type='text' name='name' placeholder='Username' onChange={e => setName({name: e.target.value})}/><br/>
          <h6 className='m-0'>Password</h6>
          <input className='w-100 p-2' type='password' name='password' placeholder='Password'/><br/>
          <button className='w-100 py-2 mt-4' onClick={handleUser} type="submit">Login</button>
        </form>
      </div>
      <div className={Overlay} onClick={handleUser}></div>
    </>
  )
}

export default User