import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo.svg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleSignOut =()=>{
    logOut()
    .then()
    .catch(err => console.error(err))
  }
  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        {
          user?.email ? <>
          <Link to="/orders">orders</Link>
          
          </>
          :
          <Link to="/login">Login</Link>
        
        }
      </li>
    </>
  );
  return (
    <div className="navbar mb-10 pt-5 h-20 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
      <div className="navbar-end">
          <div className="flex">
            <div className="dropdown dropdown-end"> 
          {
            user?.email && <div className="dropdown dropdown-end mx-5">
            <label
              tabIndex={0}
              className="btn normal-case btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
              <button className="btn-ghost" onClick={handleSignOut}>Sign Out</button>
              </li>
            </ul>
          </div>
          }
            </div>
            
          </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
