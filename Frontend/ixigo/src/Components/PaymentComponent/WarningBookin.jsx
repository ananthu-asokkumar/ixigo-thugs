import React from "react";
import "./WarningBooking.css";
function WarningBookin() {
  return (
    <div
      className="card m-2"
      style={{
        marginBottom: "10px",
        backgroundColor: "#7A325C",
      }}
    >
      <div className="container d-flex">
        <div>
          <img
            src="https://images.ixigo.com/rt/pc/img/insurance/insurance_badge.gif"
            alt=""
            style={{ width: "85px", marginTop: "30px" }}
          />
        </div>
        <div className="mx-2 my-5">
          <h5 style={{ fontWeight: "600", color: "#FFF" }}>
            Example heading
            <span
              style={{
                display: "inline-block!important",
                color: "#FFF",
                backgroundColor: "#D63E2B",
                fontSize: "14px",
                padding: "3px 8px",
                borderRadius: "4px",
                marginTop: "3px",
                marginLeft: "10px",
                fontWeight: "500",
              }}
            >
              Partially Refundable
            </span>
          </h5>
          <p style={{ color: "#FFF" }}>
            In case you cancel, you will have to pay heavy cancellation charges
          </p>
        </div>
      </div>
      <div className="card mx-3 " style={{ padding: "12px 12px 15px" }}>
        <p
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}
        >
          Enjoy Free Cancellation for only <strong> 627 /person</strong>
          <span style={{ fontSize: "16px", color: "rgba(0,0,0,.64)" }}>
            (18% GST included)
          </span>
        </p>
        <span style={{ marginTop: "15px", color: "rgba(0,0,0,.87)" }}>
          Plans do change! Avoid losing your hard-earned money. Claim FULL
          refund, even when YOU cancel
        </span>
        <div className="d-flex ">
          <div className="card m-2 p-2" style={{ width: " 12rem" }}>
            <div className="card-body">
              <h6 className="card-title" style={{ color: "rgba(0,0,0,.64)" }}>
                Cancellation Fees
              </h6>
              <hr />
              <span className="card-text" style={{ color: "rgba(0,0,0,.64)" }}>
                Claim upto
              </span>
              <br />
              <span>3000</span>
            </div>
          </div>
          <div className="card m-2 p-2" style={{ width: " 12rem" }}>
            <div className="card-body">
              <h6 className="card-title">Flight Delay</h6>
              <hr />
              <span className="card-text">Claim upto</span>
              <br />
              <span>3000</span>
            </div>
          </div>
          <div className="card m-2 p-2" style={{ width: " 12rem" }}>
            <div className="card-body">
              <h6 className="card-title">Baggage Loss</h6>
              <hr />
              <span className="card-text">Claim upto</span>
              <br />
              <span>3000</span>
            </div>
          </div>
          <div className="card m-2 p-2" style={{ width: " 12rem" }}>
            <div className="card-body">
              <h6 className="card-title">Accidental Hospitalization</h6>
              <hr />
              <span className="card-text">Claim upto</span>
              <br />
              <span>3000</span>
            </div>
          </div>
          <div className="card m-2 p-2" style={{ width: " 12rem" }}>
            <div className="card-body">
              <h6 className="card-title">Accidental Death</h6>
              <hr />
              <span className="card-text">Claim upto</span>
              <br />
              <span>3000</span>
            </div>
          </div>
        </div>
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              <span
                style={{
                  fontSize: "16px",
                  letterSpacing: "normal",
                  color: "#EC5B24",
                  lineHeight: "1.4",
                }}
              >
                Yes,Insure my trip now!
              </span>
              <br />
              <span
                style={{
                  fontSize: "14px",
                  color: "rgba(0,0,0,.64)",
                  lineHeight: "1.2",
                }}
              >
                1881 will be added to the total booking amount
              </span>
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              <span>No, I don't wnat insurance!</span>
              <br />
              <span>
                I'm willing to risk it and pay heavy cancellation charges if I
                cancel
              </span>
            </label>
          </div>
          <div>
            <span>
              I agree to the Terms & Conditions. I confirm that I am 18+ and all
              passengers are from 2 years to 70 years of age.
            </span>
          </div>
          <div>
            <p>policy overview and FAQs</p>
          </div>
          <div style={{ backgroundColor: "lightgrey" }}>
            <p className="text-success p-2">
              10% of our flight bookers cancel their booking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WarningBookin;
