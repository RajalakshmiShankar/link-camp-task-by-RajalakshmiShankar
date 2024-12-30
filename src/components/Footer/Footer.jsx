import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer' className='footer dark-background'>
      <div className='footer-content'>
        <div className='footer-brand'>
          <h2>Logis</h2>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada
            terra videa magna derita valies darta donna mare fermentum iaculis
            eu non diam phasellus.
          </p>
          <div className='social-links'>
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
        </div>

        <div className='footer-links'>
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About us</a>
            </li>
            <li>
              <a href='/'>Services</a>
            </li>
            <li>
              <a href='/'>Terms of service</a>
            </li>
            <li>
              <a href='/'>Privacy policy</a>
            </li>
          </ul>
        </div>

        <div className='footer-links'>
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href='/'>Web Design</a>
            </li>
            <li>
              <a href='/'>Web Development</a>
            </li>
            <li>
              <a href='/'>Product Management</a>
            </li>
            <li>
              <a href='/'>Marketing</a>
            </li>
            <li>
              <a href='/'>Graphic Design</a>
            </li>
          </ul>
        </div>

        <div className='footer-contact'>
          <h4>Contact Us</h4>
          <div className='contact-info'>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p>
              <strong>Email:</strong> info@example.com
            </p>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='copyright'>
          <div className='copyright-text'>
            <p>
              © Copyright <strong>Logis</strong> All Rights Reserved
            </p>
            <p>
              Designed by <a href='https://bootstrapmade.com/'>BootstrapMade</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
