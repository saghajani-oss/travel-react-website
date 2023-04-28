import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import HomeImg from "../images/12.jpg";
import Trips from "../components/Trips";
import Footer from "../components/Footer";


export default function Home() {
    return (
      <div className="home">
        <Navbar />
        <Hero
          className="hero"
          img={HomeImg}
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          btnUrl="/"
          btnClassName="show"
          btnText="Travel Plan"
        />
        <Destination />
        <Trips />
        <Footer />
      </div>
    );
}