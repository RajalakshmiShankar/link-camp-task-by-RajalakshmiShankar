import React from "react";
import "./Newsletter.css";
import linkedMagazine from "../../assets/images/Newsletter/IEEE-Linked-image.jpg";
const Newsletter = () => {
  return (
    <section className='newsletter-section'>
      <div className='newsletter-container'>
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
