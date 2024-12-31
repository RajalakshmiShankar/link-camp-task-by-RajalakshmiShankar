import React from "react";
import "./LoadingScreen.css";
// import logo from "../../assets/images/";

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className='loading-screen'>
      <div className='loading-content'>
        {/* <img src={logo} alt='IEEE Logo' className='loading-logo' /> */}
        <div className='loading-spinner'>
          <div className='spinner'></div>
        </div>
        <div className='loading-text'>Loading...</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
