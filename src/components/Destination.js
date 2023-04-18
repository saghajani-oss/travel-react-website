import React from "react";
import "./Destination.css";
import Mountain1 from "../images/1.jpg"
import Mountain2 from "../images/2.jpg";

export default function Destination() {
    return (
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
        <div className="first-des">
          <div className="des-text">
            <h2>Taal Valcano, Batangas</h2>
            <p>
              One of the most iconic views in Luzon, Mt. Taal boasts a valcano
              inside a lake inside an island. If you fancy a closer look, the
              hike up to the crater is a mere 45 minutes, and is easy enough for
              beginners. Guides will assist you most of the way and you'll see
              the peculiar environment found on an active volcano, including
              volcanic rocks and steam vents. The hike can be dusty.
            </p>
          </div>
          <div className="des-image">
            <img src={Mountain1} alt="img-des" />
            <img src={Mountain2} alt="img-des" />
          </div>
        </div>
      </div>
    );
}