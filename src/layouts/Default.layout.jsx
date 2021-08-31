import React from "react";

//Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
      {props.children}  
    </>  
  );
};

export default DefaultLayout;
