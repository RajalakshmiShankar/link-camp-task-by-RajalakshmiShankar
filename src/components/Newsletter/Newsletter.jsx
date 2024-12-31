import React, { useEffect, useRef } from "react";
import "./Newsletter.css";
import linkedMagazine from "../../assets/images/Newsletter/IEEE-Linked-image.jpg";

const Newsletter = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className='newsletter-section' ref={sectionRef}>
      <div className='newsletter-container'>
        <div className='newsletter-content'>
          <div className='newsletter-text'>
            <span className='subtitle animate-subtitle'>
              IEEE LINK NEWSLETTER
            </span>
            <h2 className='animate-title'>IEEE LINKED</h2>
          </div>
          <div className='magazine-cover'>
            <img src={linkedMagazine} alt='IEEE LINKED Magazine Cover' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
