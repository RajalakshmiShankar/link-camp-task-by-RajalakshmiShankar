import React from "react";
import "./Stats.css";
import { BiGroup } from "react-icons/bi";
import { BiBuildingHouse } from "react-icons/bi";
import { BiCalendarEvent } from "react-icons/bi";
import { BiTrophy } from "react-icons/bi";

const Stats = () => {
  return (
    <section className='stats-section'>
      <div className='container'>
        <div className='stats-grid'>
          <div className='stat-item'>
            <div className='stat-icon'>
              <BiGroup />
            </div>
            <h2>13000+</h2>
            <p>Student Members</p>
          </div>

          <div className='stat-item'>
            <div className='stat-icon'>
              <BiBuildingHouse />
            </div>
            <h2>116+</h2>
            <p>Student Branches</p>
          </div>

          <div className='stat-item'>
            <div className='stat-icon'>
              <BiCalendarEvent />
            </div>
            <h2>3000+</h2>
            <p>Events</p>
          </div>

          <div className='stat-item'>
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
