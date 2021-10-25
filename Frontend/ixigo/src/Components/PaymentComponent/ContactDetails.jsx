import React from "react";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ShowForm from "./ShowForm";
import Switch from "@mui/material/Switch";
export default function ContactDetails() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="card m-2 p-3">
      <div className="d-flex">
        <div>
          <label style={{ marginLeft: "2.5rem" }}>Mobile Number</label>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            style={{ outLine: "none" }}
          />
        </div>
        <div style={{ marginLeft: "2rem" }}>
          <label>email</label>
          <br />
          <input
            style={{
              borderTopStyle: "hidden",
              borderLeftStyle: "hidden",
              borderRightStyle: "hidden",
            }}
            type="email"
            name="email"
            placeholder="enter email"
            required
          />
        </div>
      </div>
      <div className="d-flex " style={{ marginTop: "2rem" }}>
        <span style={{ marginTop: "0.5rem" }}>
          I would like to add my GSTIN (optional){" "}
        </span>
        <div className="form-check form-switch">
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
      <div>
        {checked ? (
          <ShowForm />
        ) : (
          <p>
            To claim credit of GST charged by airlines, please enter your GST
            details.
          </p>
        )}
      </div>
    </div>
  );
}
