import React from "react";
import "./Destination.css";


export default function DestinationData(props) {
    return (
      <div className={props.className}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="des-image">
          <img src={props.img1} alt="img-des" />
          <img src={props.img2} alt="img-des" />
        </div>
      </div>
    );
}