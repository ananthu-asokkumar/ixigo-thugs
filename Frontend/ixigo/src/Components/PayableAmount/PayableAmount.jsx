import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function PayableAmount({ items }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: "2rem" }} className="card p-2">
      <Button
        style={{
          textDecoration: "none",
          border: "none",
          outline: "none",
          backgroundColor: "#E1E1E1",
          fontSize: "16px",
        }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="gray-light"
      >
        <div className="d-flex justify-content-between">
          <div style={{ fontSize: "16px" }}>
            Fare Summary <span>(three traveller)</span>
          </div>
          <div>
            <ChevronRightIcon />
          </div>
        </div>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="d-flex justify-content-between">
            <div>
              <p>Fare Type</p>
              <p>Base Fare</p>
              <p>Taxes & fees </p>
            </div>
            <div>
              <p>partially refundable</p>
              <p style={{ marginLeft: "90px" }}>5754</p>
              <p style={{ marginLeft: "90px" }}> 1000</p>
            </div>
          </div>
          <hr className="m-3" />
          <div className="d-flex justify-content-between">
            <div>
              <p>instant Off</p>
              <p>Amount Payable</p>
            </div>
            <div>
              <p>{items.offPrice}</p>
              <p>{items.basicPrice}</p>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
}
export default PayableAmount;
