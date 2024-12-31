import React, { useState } from "react";
import "./navbar.css";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);
      // Close any open dropdowns
      setActiveDropdown(null);
      // Calculate header height for offset
      const headerHeight = document.querySelector(".navbar").offsetHeight;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='nav-brand'>
          <a href='/' className='nav-logo'>
            IEEE LINK
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
              <button
                className='nav-link'
                onClick={() => scrollToSection("about")}
              >
                About
              </button>
            </li>
            <li className='nav-item dropdown'>
              <button
                className='nav-link dropdown-toggle'
                onClick={() => toggleDropdown("office-bearers")}
              >
                Office Bearers
              </button>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === "office-bearers" ? "show" : ""
                }`}
              >
                <li>
                  <a href='/office-bearers/present' className='dropdown-item'>
                    Present
                  </a>
                </li>
                <li>
                  <a href='/office-bearers/2023' className='dropdown-item'>
                    2023
                  </a>
                </li>
                <li>
                  <a href='/office-bearers/2022' className='dropdown-item'>
                    2022
                  </a>
                </li>
                <li>
                  <a href='/office-bearers/2021' className='dropdown-item'>
                    2021
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='/ieee-linked' className='nav-link'>
                IEEE Linked
              </a>
            </li>
            <li className='nav-item dropdown'>
              <button
                className='nav-link dropdown-toggle'
                onClick={() => toggleDropdown("resources")}
              >
                Resources
              </button>
              <ul
                className={`dropdown-menu ${
                  activeDropdown === "resources" ? "show" : ""
                }`}
              >
                <li>
                  <a
                    href='/resources/execom-training'
                    className='dropdown-item'
                  >
                    Execom Training
                  </a>
                </li>
                <li>
                  <a
                    href='/resources/award-awareness'
                    className='dropdown-item'
                  >
                    Award Awareness
                  </a>
                </li>
                <li>
                  <a
                    href='/resources/communication-partner'
                    className='dropdown-item'
                  >
                    Communication Partner
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='/contact' className='nav-link contact-btn'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='nav-social'>
          <a href='/' className='social-link'>
            <FaInstagram />
          </a>
          <a href='/' className='social-link'>
            <FaLinkedin />
          </a>
          <a href='/' className='social-link'>
            <FaFacebook />
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
