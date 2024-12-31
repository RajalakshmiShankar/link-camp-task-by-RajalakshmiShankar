import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ isLoading }) => {
  return (
    <div className={`loading-screen ${isLoading ? "visible" : "fade-out"}`}>
      <div className='loader'>
        <svg className='circular' viewBox='25 25 50 50'>
          <circle
            className='path'
            cx='50'
            cy='50'
            r='20'
            fill='none'
            strokeWidth='3'
            strokeMiterlimit='10'
          />
        </svg>
        <div className='loading-text'>IEEE LINK</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
