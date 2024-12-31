import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    };

    const titleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-down");
          titleObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const contentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a slight delay before adding the animation class
          setTimeout(() => {
            entry.target.classList.add("animate-in");
          }, 400); // Delay after title animation
          contentObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }
    if (leftRef.current) {
      contentObserver.observe(leftRef.current);
    }
    if (rightRef.current) {
      contentObserver.observe(rightRef.current);
    }

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      if (leftRef.current) contentObserver.unobserve(leftRef.current);
      if (rightRef.current) contentObserver.unobserve(rightRef.current);
    };
  }, []);

  return (
    <section id='about' className='about-section'>
      <div className='about-container'>
        <div className='about-header'>
          <div className='title-wrapper' ref={titleRef}>
            <h2 className='about-title'>ABOUT US</h2>
          </div>
        </div>
        <div className='about-content'>
          <div className='about-left fade-right' ref={leftRef}>
            <p className='about-description'>
              IEEE LINK is a pioneering student activities initiative that
              emerged from the IEEE Kerala Section, dedicated to fostering
              connections between IEEE student branches and enhancing the value
              of IEEE student membership.
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
                Connecting IEEE student branches across Kerala Section
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
                Promoting collaboration and knowledge sharing among students
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
                Enhancing the value of IEEE student membership
              </li>
            </ul>
          </div>
          <div className='about-right fade-left' ref={rightRef}>
            <p className='about-description'>
              As a student-driven initiative, IEEE LINK serves as a vital
              platform for networking, professional development, and technical
              growth. We facilitate meaningful connections between student
              branches, organize collaborative events, and create opportunities
              for students to develop their leadership and technical skills
              within the IEEE community.
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
