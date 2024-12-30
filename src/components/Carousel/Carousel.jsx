import React, { useState, useEffect } from "react";
import "./Carousel.css";
// Import images
import slide1 from "../../assets/images/ieeelink1.jpg";
import slide2 from "../../assets/images/ieeelink2.jpg";
import slide3 from "../../assets/images/ieeelink3.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(2);

  const items = [
    {
      title: "Welcome to IEEE Link",
      description: "Empowering Innovation Through Technology",
      image: slide1,
    },
    {
      title: "Connect & Collaborate",
      description: "Join the Global Engineering Community",
      image: slide2,
    },
    {
      title: "Learn & Grow",
      description: "Access World-Class Technical Resources",
      image: slide3,
    },
  ];

  const nextSlide = () => {
    setPreviousIndex(activeIndex);
    setActiveIndex((current) => (current + 1) % items.length);
  };

  const prevSlide = () => {
    setPreviousIndex(activeIndex);
    setActiveIndex((current) =>
      current === 0 ? items.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

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
              }`}
            >
              <div className='carousel-background'>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-6 text-center'>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <a href='#about' className='carousel-btn'>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className='carousel-nav prev' onClick={prevSlide}>
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
        <button className='carousel-nav next' onClick={nextSlide}>
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
              className={index === activeIndex ? "active" : ""}
              onClick={() => {
                setPreviousIndex(activeIndex);
                setActiveIndex(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
