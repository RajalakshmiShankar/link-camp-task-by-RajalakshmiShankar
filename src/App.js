import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Carousel from "./components/Carousel/Carousel";
import Stats from "./components/Stats/Stats";
import Features from "./components/Features/Features";
import Quote from "./components/Quote/Quote";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Societies from "./components/Societies/Societies";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Preload your assets here
    const preloadAssets = async () => {
      try {
        // Add any asset preloading logic here
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading
        setContentLoaded(true);
      } catch (error) {
        console.error("Error loading assets:", error);
        setContentLoaded(true); // Show content even if there's an error
      }
    };

    preloadAssets();
  }, []);

  useEffect(() => {
    if (contentLoaded) {
      // Add a slight delay before hiding loading screen.............
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [contentLoaded]);

  return (
    <div className='App'>
      <LoadingScreen isLoading={isLoading} />
      {contentLoaded && (
        <>
          <Navbar />
          <Carousel />
          <About />
          <Stats />
          <Features />
          <Quote />
          <Societies />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
