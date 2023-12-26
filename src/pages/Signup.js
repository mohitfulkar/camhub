import React from 'react'
import Login from './Login';
import NavBar from '..//component/NavBar'
import { Link } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import './Signup.css'


export default function Signup() {
  return (
    
    <>
    <NavBar/>
  
    <div className='container'>
      <div className='signup'>
        <form className='signupform'>
            <div className='header'>
            <h2>Signup</h2>
            </div>
            <div className='inputs'>
            <div className='labelinput-username'>
              <div className='icon-username'><IoMdPerson/></div>
            <label>Username</label>
            <input  className='input-username' type='text'/>
            </div>
            
            <div className='labelinput-email'>
            <div className='icon-username'><MdOutlineEmail/></div>
            <label>Email</label>
            <input className='input-email' type='text'/>
            </div>
            
            <div className='labelinput-pwd'>
            <div className='icon-pwd'><MdOutlinePassword/></div>
            <label>Password</label>
            <input className='input-pwd' type='password'/>
            </div>
            </div>

            <div className='btn-signup'>
              <button>Sign Up</button>
            </div>

           <div className='acExist'>
            <label>Account already exists?</label>
            <Link className='link-login' to='/login'>
              Login
            </Link>
           </div>
            

        </form>

      </div>

    </div>
    </>
  )
}

