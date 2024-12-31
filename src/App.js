import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Carousel from "./components/Carousel/Carousel";
import Stats from "./components/Stats/Stats";
import Features from "./components/Features/Features";
import Quote from "./components/Quote/Quote";

import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";

function App() {
  return (
    <div className='App'>
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
