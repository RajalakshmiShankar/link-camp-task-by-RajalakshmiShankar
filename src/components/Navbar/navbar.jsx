import React, { useState } from "react";
import "./navbar.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='nav-brand'>
          <a href='/' className='nav-logo'>
            IEEE Link
          </a>
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a href='/' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='/about' className='nav-link'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a href='/services' className='nav-link'>
                Services
              </a>
            </li>
            <li className='nav-item'>
              <a href='/contact' className='nav-link'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='nav-social'>
          <a href='/' className='social-link'>
            <FaTwitter />
          </a>
          <a href='/' className='social-link'>
            <FaFacebook />
          </a>
          <a href='/' className='social-link'>
            <FaInstagram />
          </a>
          <a href='/' className='social-link'>
            <FaLinkedin />
          </a>
        </div>

        <div className='nav-toggle' onClick={toggleMenu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
