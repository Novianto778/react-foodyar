import React, {useState} from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar handleOpen={handleOpen} />
      {isOpen ? <Sidebar handleOpen={handleOpen} /> : null}
    </>
  );
};

export default App;
