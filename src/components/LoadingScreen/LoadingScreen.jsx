import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className='loading-screen'>
      <div className='loading-content'>
        <div className='loading-spinner'>
          <div className='spinner'></div>
        </div>
        <div className='loading-text'>Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
