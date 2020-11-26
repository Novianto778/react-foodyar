import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import HeroSection from "./Components/HeroSection";
import SpecialSection from "./Components/SpecialSection";
import Testimonial from "./Components/Testimonial";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tabActive, setTabActive] = useState(0);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleTabActive = (id) => {
    setTabActive(id)
  }
  return (
    <>
      <Navbar handleOpen={handleOpen} />
      {isOpen ? <Sidebar handleOpen={handleOpen} /> : null}
      <HeroSection />
      <SpecialSection tabActive={tabActive} handleTabActive={handleTabActive} />
      <Testimonial />
    </>
  );
};

export default App;
