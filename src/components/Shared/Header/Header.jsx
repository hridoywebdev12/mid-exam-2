import React, { useContext } from 'react';

import "./Header.css"
import logoimgge from '../../../assets/imges/create-you.png'
import { Link, NavLink } from 'react-router-dom';
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { AuthContext } from '../../../Context/UserContext';








const Header = () => {

  const {user,logOut} = useContext(AuthContext)
  const handleLogOut =()=>{
    logOut()
  }
    return (

        

        <div className='container mx-auto'>
            <div className='email'>


              <div className='  text-[#FFF] flex justify-between items-center gap-2 ms-10 me-10'>

              <div className='flex'>
              <div className='icon1'>
               <TfiEmail /> 
               <h1 className='my-4 ps-2'><NavLink to="#">hridoysaha083@gmail.com</NavLink></h1>
               </div>
               <div className='icon1 ps-3'>
               <FaPhone></FaPhone>
               <h1 className='ps-2'><a href="">017846123205</a></h1>
               </div>
              </div>

              <div className='flex gap-2 '>
                <NavLink to="https://www.facebook.com/" className="fabicona"><FaFacebookSquare></FaFacebookSquare></NavLink>
                <NavLink to="https://www.youtube.com/" className="fabiconay"><IoLogoYoutube></IoLogoYoutube></NavLink>
                <NavLink to="https://www.instagram.com/" className="fabiconai"><BsInstagram></BsInstagram></NavLink>
                <NavLink to="https://bd.linkedin.com/"  className="fabiconal"> <FaLinkedinIn></FaLinkedinIn> </NavLink>
              </div>

              <div className='flex gap-2'>
                
                  <NavLink to="/login">Login</NavLink>
                  <NavLink>||</NavLink>
                  
                  <Link to="/ragistration">Registration </Link>
              
              </div>

              </div>


                <p></p>
            </div>


            <div className=" navbar">
  <div className=' container mx-auto'>
  <div className="flex-1">
    <NavLink to="/" className="logo">
        <img className='w-1/4' src={logoimgge} alt="" />
    </NavLink>
  </div>
  <div className="flex gap-4">

  <div className=' text-[#FFF] items-center flex mr-11 gap-3'>
  <input type="text" placeholder="Search" className="border-[#FFF] bg-slate-900 input input-bordered w-100 md:w-auto" />
  <FaSearch></FaSearch>
  </div>


    <div className=" flex form-control">

    <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-[#FFF]">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/service">Service Us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="faq">FAQ</Link></li>
     
      
     
    </ul>
  </div>
      
    </div>  
    
     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
       {
        user ?  <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
      </div> : <NavLink to="/login" className='text-[#FFF]'>Login</NavLink>
       }
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {user?.displayName}
            <span className="badge border-[#000] text-[red]">New</span>
          </a>
        </li>
        { user && <li><a>{user?.email}</a></li>}
        {
          user && <li><NavLink onClick={handleLogOut}>Logout</NavLink></li>
        }
      </ul>
    </div>
    
  </div>
  </div>
</div>
        </div>
    );
};

export default Header;