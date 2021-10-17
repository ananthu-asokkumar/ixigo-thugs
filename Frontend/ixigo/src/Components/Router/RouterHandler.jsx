import React from "react";
import { Route } from "react-router-dom";
import PaymentMain from "../PaymentComponent/PaymentMain";
import FlightBooking from "../flight/FlightBooking";
function RouterHandler() {
  return (
    <div>
      <switch>
        <Route path="/" exact>
          <FlightBooking />
        </Route>
        <Route path="/booknow/:_id" exact>
          <PaymentMain />
        </Route>

        <Route path="/payment" exact>
          <div>wellcome</div>
        </Route>
      </switch>
    </div>
  );
}

export default RouterHandler;
