import React, {useState} from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import HeroSection from "./Components/HeroSection";

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar handleOpen={handleOpen} />
      {isOpen ? <Sidebar handleOpen={handleOpen} /> : null}
      <HeroSection />
    </>
  );
};

export default App;
