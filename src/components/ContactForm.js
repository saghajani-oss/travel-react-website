import React from "react";
import "./ContactForm.css"

export default function ContactForm() {
    return (
      <div className="contact-form">
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder="Name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Subject"></input>
          <textarea placeholder="Message"></textarea>
          <button className="contact-btn">Send</button>
        </form>
      </div>
    );
}