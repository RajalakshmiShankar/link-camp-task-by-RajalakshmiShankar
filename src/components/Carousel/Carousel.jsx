import React, { useState, useEffect } from "react";
import "./Carousel.css";
// Import images
import slide1 from "../../assets/images/ieeelink1.jpg";
import slide2 from "../../assets/images/ieeelink2.jpg";
import slide3 from "../../assets/images/ieeelink3.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(2);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);

  const items = [
    {
      title: (
        <>
          Welcome to{" "}
          <span className='highlight'>
            IEEE <span className='link-text'>LINK</span>
          </span>
        </>
      ),
      description: "Connecting Student Branches Across Kerala Section",
      image: slide1,
    },
    {
      title: (
        <>
          <span className='highlight'>
            IEEE <span className='link-text'>LINK</span>
          </span>{" "}
          Activities
        </>
      ),
      description: "Enhancing IEEE Student Member Experience Since 2005",
      image: slide2,
    },
    {
      title: (
        <>
          Join{" "}
          <span className='highlight'>
            IEEE <span className='link-text'>LINK</span>
          </span>{" "}
          Network
        </>
      ),
      description: "Building Bridges Between IEEE Student Communities",
      image: slide3,
    },
  ];

  const nextSlide = () => {
    setPreviousIndex(activeIndex);
    setActiveIndex((current) => (current + 1) % items.length);
    setIsAnimating(true);
    setIsZoomed(true);
    setTimeout(() => setIsZoomed(false), 600);
  };

  const prevSlide = () => {
    setPreviousIndex(activeIndex);
    setActiveIndex((current) =>
      current === 0 ? items.length - 1 : current - 1
    );
    setIsAnimating(true);
    setIsZoomed(true);

    // Reset animations after slide change
    setTimeout(() => {
      setIsZoomed(false);
      setIsAnimating(false);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Reset animations when slide changes
    const activeSlide = document.querySelector(".carousel-item.active");
    if (activeSlide) {
      const elements = activeSlide.querySelectorAll(
        ".animate-title, .animate-description, .animate-btn"
      );
      elements.forEach((element) => {
        element.style.animation = "none";
        const reflow = element.offsetHeight;
        element.style.animation = null;
      });
    }

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className='carousel-section'>
      <div className='carousel-container'>
        <div className='carousel-content'>
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex
                  ? "active"
                  : index === previousIndex
                  ? "previous"
                  : ""
              } ${isZoomed ? "zoom-effect" : ""}`}
            >
              <div className='carousel-background'>
                <img
                  src={item.image}
                  alt={item.title}
                  className={isZoomed ? "zoom-in" : ""}
                />
              </div>
              <div className='carousel-text-container'>
                <div className='carousel-text-content'>
                  <h2
                    className={`${isAnimating ? "animate-title" : ""} ${
                      index === activeIndex ? "fade-in" : ""
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p
                    className={`${isAnimating ? "animate-description" : ""} ${
                      index === activeIndex ? "fade-in" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                  <a
                    href='#about'
                    className={`carousel-btn ${
                      isAnimating ? "animate-btn" : ""
                    } ${index === activeIndex ? "fade-in" : ""}`}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className='carousel-nav prev hover-effect' onClick={prevSlide}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='15 18 9 12 15 6' />
          </svg>
        </button>
        <button className='carousel-nav next hover-effect' onClick={nextSlide}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='9 6 15 12 9 18' />
          </svg>
        </button>

        <div className='carousel-indicators'>
          {items.map((_, index) => (
            <button
              key={index}
              className={`${
                index === activeIndex ? "active" : ""
              } indicator-animation`}
              onClick={() => {
                setPreviousIndex(activeIndex);
                setActiveIndex(index);
                setIsAnimating(true);
                setIsZoomed(true);
                setTimeout(() => setIsZoomed(false), 600);
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
