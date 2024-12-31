import React, { useEffect, useRef } from "react";
import "./Stats.css";
import { BiGroup } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { BiCalendarEvent } from "react-icons/bi";
import { BiTrophy } from "react-icons/bi";

const Stats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statItems = entry.target.querySelectorAll(".stat-item");
          statItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-in");
            }, index * 200); // Stagger the animations
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <section className='stats-section'>
      <div className='container'>
        <div className='stats-grid' ref={statsRef}>
          <div className='stat-item slide-up'>
            <div className='stat-icon'>
              <BiGroup />
            </div>
            <h2>13000+</h2>
            <p>Student Members</p>
          </div>

          <div className='stat-item slide-up'>
            <div className='stat-icon'>
              <BiBuildingHouse />
            </div>
            <h2>116+</h2>
            <p>Student Branches</p>
          </div>

          <div className='stat-item slide-up'>
            <div className='stat-icon'>
              <BiCalendarEvent />
            </div>
            <h2>3000+</h2>
            <p>Events</p>
          </div>

          <div className='stat-item slide-up'>
            <div className='stat-icon'>
              <BiTrophy />
            </div>
            <h2>400+</h2>
            <p>Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
