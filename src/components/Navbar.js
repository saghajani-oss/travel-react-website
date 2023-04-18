import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [click, setClick] = useState(false); 

  function handleHamburgerMenuIcon() {
    setClick(prevIcon => !prevIcon)
  }

  return (
    <div className="navbar">
      <h2 className="logo">
        travel<i class="uil uil-swiggy"></i>
      </h2>
      <div className="Hamburger-menu" onClick={handleHamburgerMenuIcon}>
        <i className={click ? "uil uil-multiply" : "uil uil-draggabledots"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.className} to={item.url}>
                {" "}
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button className="signup-btn"> Sign Up</button>
      </ul>
    </div>
  );
}
