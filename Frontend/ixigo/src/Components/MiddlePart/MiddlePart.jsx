import React from "react";
import FlightDestination from "./FlightRoutes";
import FlightApp from "./FlightApp";
// import Sliderimg from './Sliderimg'

const MiddlePart = () => {
  return (
    <div>
      <FlightDestination />
      <FlightApp />
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default MiddlePart;
