import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../images/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <Hero
        className="hero-mid"
        img={ContactImg}
        title="Contact"
        btnClassName="hidden"
      />
      <ContactForm />
      <Footer />
    </div>
  );
}
