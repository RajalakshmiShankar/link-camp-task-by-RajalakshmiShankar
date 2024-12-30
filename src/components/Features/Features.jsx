import React from "react";
import "./Features.css";
import { BiBuildings, BiTrophy, BiCalendar, BiGroup } from "react-icons/bi";

const Features = () => {
  return (
    <section className='features-section'>
      <div className='container'>
        <div className='section-header'>
          <h2>FEATURES</h2>
          <p>What We Offer</p>
        </div>

        <div className='features-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>
              <BiBuildings />
            </div>
            <h3>Student Branches</h3>
            <p>
              There are thousands of IEEE Student Branches throughout the world
              and likely one near you. It's your connection to local
              professionals, academics and the IEEE organization at a large
              scale.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>
              <BiTrophy />
            </div>
            <h3>Funds & Awards</h3>
            <p>
              Being an IEEE Student member has its perks. You'll have access to
              funds including travel grants, scholarships, awards and much more!
              All to support your advancement and efforts to the next level.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>
              <BiCalendar />
            </div>
            <h3>Events</h3>
            <p>
              IEEE hosts events all year and all around the globe on topics that
              will surely interest you. In addition, IEEE Students hosts
              competitions that offer the opportunity to develop professionally.
            </p>
          </div>

          <div className='feature-card'>
            <div className='feature-icon'>
              <BiGroup />
            </div>
            <h3>Mentoring Support</h3>
            <p>
              IEEE members share their expertise with IEEE Students in the
              interest of the students upward mobility within their chose field.
              Educational tools are also available to IEEE Student members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
