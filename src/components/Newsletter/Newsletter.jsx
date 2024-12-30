import React from "react";
import "./Newsletter.css";
import linkedMagazine from "../../assets/images/ieee-linked-magazine.jpeg"; // Add your magazine cover image

const Newsletter = () => {
  return (
    <section className='newsletter-section'>
      <div className='container'>
        <div className='newsletter-content'>
          <div className='newsletter-text'>
            <span className='subtitle'>IEEE LINK NEWSLETTER</span>
            <h2>IEEE LINKED</h2>
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
