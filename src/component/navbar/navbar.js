import React, { useState } from "react";
import "./navbar.css";
import "remixicon/fonts/remixicon.css";
import "boxicons";
const Nav = () => {

  return (
    <>
    
        <header className="navbarr" >
          
        <div className="navbarr-container  container">
      
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
          


            <div className="main_nav">
          <a href="#" className="user">
            <i className="ri-user-fill"></i>Sign In
          </a>
          <a href="#">Register</a>
          </div>
        
            <ul className="menu-items  ">
           
            <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
            </ul>
          
        </div>
    
    </header>
    </>
  );
};

export default Nav;
