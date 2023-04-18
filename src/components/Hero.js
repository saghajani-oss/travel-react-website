import React from "react";
import "./Hero.css"


export default function Hero(props) {
    return (
      <div className={props.className}>
        <img src={props.img} alt="home-img"></img>
        <div className="hero-content">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.btnUrl} className={props.btnClassName}>
            {props.btnText}
          </a>
        </div>
      </div>
    );
}