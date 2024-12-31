import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer' className='footer dark-background'>
      <div className='footer-content'>
        <div className='footer-about'>
          <h4>About IEEE LINK</h4>
          <p>
            IEEE LINK is an innovative concept that originated in IEEE Kerala
            Section in India, aimed at networking student branches in an
            effective way thereby increasing the value in IEEE student
            membership.
          </p>
          <div className='social-links'>
            <a href='https://www.facebook.com/ieeelink' className='social-link'>
              <FaFacebook />
            </a>
            <a
              href='https://www.instagram.com/ieeelink/'
              className='social-link'
            >
              <FaInstagram />
            </a>
            <a
              href='https://www.linkedin.com/company/ieeelink/'
              className='social-link'
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className='footer-links'>
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              <a href='/'>MINT</a>
            </li>
            <li>
              <a href='/'>IEEE Kerala Section Interns</a>
            </li>
            <li>
              <a href='/'>IEEE Kerala Section YP</a>
            </li>
            <li>
              <a href='/'>IEEE Students</a>
            </li>
            <li>
              <a href='/'>Privacy Policy</a>
            </li>
            <li>
              <a href='/'>Refund Policy</a>
            </li>
            <li>
              <a href='/'>Terms & condition</a>
            </li>
          </ul>
        </div>
        <div className='footer-links'>
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              <a href='/'>IEEE Kerala Section</a>
            </li>
            <li>
              <a href='/'>IEEE India Council</a>
            </li>
            <li>
              <a href='/'>IEEE Region 10</a>
            </li>
            <li>
              <a href='/'>IEEE</a>
            </li>
          </ul>
        </div>

        <div className='footer-contact'>
          <h4>CONTACT US</h4>
          <div className='contact-info'>
            <p>Pulimoodu,</p>
            <p>Thiruvananthapuram,</p>
            <p>Kerala, India</p>
            <p>
              <strong>Phone:</strong> +91 0471 247 3515
            </p>
            <p>
              <strong>Email:</strong> team@ieee-link.org
            </p>
          </div>
        </div>
      </div>

      <div className='footer-bottom'>
        <div className='copyright'>
          <div className='copyright-text'>
            <p>
              © Copyright <strong>IEEE Kerala Section</strong>. All Rights
              Reserved
            </p>
            <p>
              Made with ❤️ by <strong>RAJALAKSHMI SHANKAR</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
