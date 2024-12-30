import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
