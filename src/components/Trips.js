import React from "react";
import "./Trips.css";
import TripCard from "./TripCard";
import CardImage1 from "../images/5.jpg"
import CardImage2 from "../images/8.jpg"
import CardImage3 from "../images/6.jpg"

export default function Trips() {
    return (
      <div className="trips">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps</p>
        <div className="cards">
          <TripCard
            img={CardImage1}
            heading="Trip in Indonesia"
            text="Indonesia, officially the Republic of Indonesia is a country in Southeast Asia and Oceania between the Indian and Pacific Oceans. It consist of over 17,000 islands, including Sumatra, Java, Sulawesi and part of Borneo and New Guinea."
          />
          <TripCard img={CardImage2} heading="Trip in Malaysia" text="Malaysia in a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences." />
          <TripCard img={CardImage3} heading="Trip in France" text="France is Westen Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion hauses, classical art museums including the Louvre and monuments like the Eiffel Tower." />
        </div>
      </div>
    );
}