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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Optional: Add this if you're using React Router
  useEffect(() => {
    // Scroll to top when route changes
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <div className='App'>
      <LoadingScreen isLoading={isLoading} />
      <Navbar />
      <Carousel />
      <About />
      <Stats />
      <Features />
      <Quote />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
