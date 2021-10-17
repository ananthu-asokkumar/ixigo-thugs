import SelectSeat from "./SelectSeat";
import StepProgressBarComponent from "./StepProgressBarComponent";
import { Route, useParams } from "react-router-dom";
import { useEffect } from "react";
import BasicDiscount from "./BasicDiscount";
import WarningBookin from "./WarningBookin";
import ContactDetails from "./ContactDetails";
import OfferPage from "./OfferPage";
import PayableAmount from "../PayableAmount/PayableAmount";
import ContinueButton from "../PayableAmount/ContinueButton";
// import { axios } from "axios";
// import { useParams } from "react";

function PaymentMain({ match }) {
  useEffect(() => {
    fetchItem();
    console.log("matchData" + match);
  }, []);

  const fetchItem = async () => {
    try {
      let res = await fetch(`http://localhost:5000/flights/${match.id}`);
      const dataflight = await res.json();
      console.log(dataflight);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="container-fluid  m-auto" style={{}}>
      <div className="row mx-0">
        <div className="col-12">
          <StepProgressBarComponent />
        </div>
      </div>
      <div className="row">
        <div className="col-9 m-0">
          <SelectSeat />
          <BasicDiscount />
          <WarningBookin />
          <ContactDetails />
        </div>
        <div className="col-3 m-0">
          <OfferPage />
          <PayableAmount />
          <ContinueButton />
        </div>
      </div>
    </div>
  );
}

export default PaymentMain;
