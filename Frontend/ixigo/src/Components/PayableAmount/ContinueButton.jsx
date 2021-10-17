import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function ContinueButton() {
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: "#EC5C30", width: "100%", marginTop: "2rem" }}
      >
        <Link to="/payment" style={{ textDecoration: "none", color: "white" }}>
          
          CONTINUE
        </Link>
      </Button>
    </div>
  );
}
export default ContinueButton;
