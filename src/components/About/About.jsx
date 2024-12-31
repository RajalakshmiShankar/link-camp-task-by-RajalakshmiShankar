import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className='about-section'>
      <div className='about-container'>
        <div className='about-header'>
          <h2 className='about-title'>ABOUT US</h2>
        </div>
        <div className='about-content'>
          <div className='about-left'>
            <p className='about-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className='about-list'>
              <li className='about-list-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className='about-list-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className='about-list-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                Ullamco laboris nisi ut aliquip ex ea commodo
              </li>
            </ul>
          </div>
          <div className='about-right'>
            <p className='about-description'>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <a href='#' className='read-more-btn'>
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
