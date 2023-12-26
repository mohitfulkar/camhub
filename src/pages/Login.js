import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";

export default function Login() {
  return (
    <div className='container'>
      <div className='login'>
        <form className='loginform'>
            <div className='header'>
            <h2>Login</h2>
            </div>
            <div className='inputs'>
            <div className='labelinput-username'>
              <div className='icon-username'><IoMdPerson/></div>
            <label>Username</label>
            <input  className='input-username' type='text'/>
            </div>
            
            
            <div className='labelinput-pwd'>
            <div className='icon-pwd'><MdOutlinePassword/></div>
            <label>Password</label>
            <input className='input-pwd' type='password'/>
            </div>
            </div>

            <div className='btn-login'>
              <button>Login</button>
            </div>

           <div className='NewReg'>
            <label>New to CamHub?</label>
            <Link className='link-login' to='/signup'>
              Signup
            </Link>
           </div>
            

        </form>

      </div>

    </div>
  )
}
