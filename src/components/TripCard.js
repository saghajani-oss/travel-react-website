import React from "react";
import "./Trips.css"


export default function TripCard(props) {
    return(
        <div className="trip-card">
            <div className="card-img">
                <img src={props.img} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}