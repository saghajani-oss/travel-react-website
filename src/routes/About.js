import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../images/night.jpg";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <Hero
        className="hero-mid"
        img={AboutImg}
        title="About"
        btnClassName="hidden"
      />
      <Footer />
    </div>
  );
}
