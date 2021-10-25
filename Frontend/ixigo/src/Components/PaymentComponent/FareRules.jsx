import React from "react";

function Farerules() {
  return (
    <div>
      <div className="d-flex p-2 justify-content-between">
        <div className="m-2" style={{ color: "#EC5B24", fontWeight: "600" }}>
          DEL-BOM
        </div>
        <div
          style={{
            border: "1px solid #559B09",
            color: "#559B09",
            padding: "0 10px",
            fontSize: "14px",
            fontWeight: "600",
          }}
          className="p-2"
        >
          Partially Refundable
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-5">
            <div className="container">
              <div className="row">
                <div
                  className="col-12 p-2"
                  style={{
                    border: "1px solid rgba(0,0,0,.12)",
                    borderRadius: "4px",
                    padding: "10px",
                    fontSize: "16px",
                  }}
                >
                  <strong> Cancellation fee</strong> (per person)
                </div>
              </div>
              <div className="row">
                <div className="col-4">ailine fee</div>
                <div className="col-4"></div>
                <div className="col-4">$3000</div>
              </div>
              <div className="row">
                <div className="col-4">ixigo fee</div>
                <div className="col-4"></div>
                <div className="col-4">$300</div>
              </div>
              <div className="row">
                <div className="col-6">Total Cancellation fee</div>
                <div className="col-2"></div>
                <div className="col-4">$3000</div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-5">
            <div className="container">
              <div className="row">
                <div
                  className="col-12 p-2"
                  style={{
                    border: "1px solid rgba(0,0,0,.12)",
                    borderRadius: "4px",
                    padding: "10px",
                    fontSize: "16px",
                  }}
                >
                  <strong>Rescheduling fee </strong> (per person)
                </div>
              </div>
              <div className="row">
                <div className="col-4">ailine fee</div>
                <div className="col-4"></div>
                <div className="col-4">$2500</div>
              </div>
              <div className="row">
                <div className="col-4">ixigo fee</div>
                <div className="col-4"></div>
                <div className="col-4">$300</div>
              </div>
              <div className="row">
                <div className="col-6">Total rescheduling fee</div>
                <div className="col-2"></div>
                <div className="col-4">$2800</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="bg-secondary p-2">Please Note</p>
        <ol>
          <li>Cancellation charges are applicable per passenger per sector.</li>
          <li>
            Partial cancellation cannot be made for tickets booked under special
            or discounted fares.
          </li>
          <li>
            In case of a no-show or for tickets cancelled post a specific time,
            only statutory taxes are refundable.
          </li>
          <li>
            Penalty charged by the airline is indicative only and may change
            without any prior notice. ixigo does not guarantee the accuracy of
            this information.
          </li>
          <li>
            Cancellation request will be processed only within the mentioned
            time period.
          </li>
          <li>
            If the flight fare is less than default cancellation penalty then
            taxes will be refundable.
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Farerules;
