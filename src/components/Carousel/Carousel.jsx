import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Welcome to IEEE Link",
      description: "Empowering Innovation Through Technology",
    },
    {
      title: "Connect & Collaborate",
      description: "Join the Global Engineering Community",
    },
    {
      title: "Learn & Grow",
      description: "Access World-Class Technical Resources",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

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
                index === activeIndex ? "active" : ""
              }`}
            >
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

        <div className='carousel-indicators'>
          {items.map((_, index) => (
            <button
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
