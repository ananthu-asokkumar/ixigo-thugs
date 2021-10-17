import SelectSeat from "./SelectSeat";
import StepProgressBarComponent from "./StepProgressBarComponent";
import { Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BasicDiscount from "./BasicDiscount";
import WarningBookin from "./WarningBookin";
import ContactDetails from "./ContactDetails";
import OfferPage from "./OfferPage";
import PayableAmount from "../PayableAmount/PayableAmount";
import ContinueButton from "../PayableAmount/ContinueButton";
// import useParams from "react-router-dom";
// import { axios } from "axios";

function PaymentMain() {
  const [items, setItems] = useState({});
  const { _id } = useParams();
  console.log("flight" + _id);
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      let res = await fetch(`http://localhost:5000/flights/${_id}`);
      const dataflight = await res.json();
      setItems(dataflight);
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
          <SelectSeat items={items} />
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
