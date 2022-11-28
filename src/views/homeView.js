import Cards from "../components/cards/cards";
import ContactUs from "../components/contact/contact";
import HeroSection from "../components/hero/herosection";
import React from "react";
import Navbar from "../components/nav/navbar";
import Form from "../components/form/form";

function Home() {
  return (
    <>
      <Navbar Hero={HeroSection} Card={Cards} Contact={ContactUs} Formulario={Form}/>
    </>
  );
}

export default Home;
