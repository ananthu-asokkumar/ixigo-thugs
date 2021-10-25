import React from "react";

function FlightCabinBag({ items }) {
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row m-2"
          style={{ color: "rgba(0,0,0,.38)", fontSize: "12px" }}
        >
          <div className="col-4">Flight</div>
          <div className="col-4">Cabin Baggage</div>
          <div className="col-4">Check-in Baggage</div>
        </div>
        <div className="row p-3" style={{ backgroundColor: "#F3F3F3" }}>
          <div className="col-4">
            {items.departureCode}-{items.arrivalCode}
          </div>
          <div className="col-4">7 kg</div>
          <div className="col-4">25 Kilograms</div>
        </div>
      </div>
    </div>
  );
}

export default FlightCabinBag;
