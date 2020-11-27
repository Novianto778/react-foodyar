import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import HeroSection from "./Components/HeroSection";
import SpecialSection from "./Components/SpecialSection";
import Testimonial from "./Components/Testimonial";
import Rating from "./Components/Rating";
import AppSection from "./Components/AppSection";
import Footer from "./Components/Footer";
import { Fade } from "react-reveal";


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tabActive, setTabActive] = useState(0);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleTabActive = (id) => {
    setTabActive(id);
  };
  return (
    <>
      <Navbar handleOpen={handleOpen} />
      {isOpen ? <Sidebar handleOpen={handleOpen} /> : null}
      <HeroSection />
      <Fade bottom>
        <SpecialSection
          tabActive={tabActive}
          handleTabActive={handleTabActive}
        />
      </Fade>
      <Fade bottom>
        <Testimonial />
      </Fade>
      <Fade bottom>
        <Rating />
      </Fade>
      <AppSection />
      <Footer />
    </>
  );
};

export default App;
