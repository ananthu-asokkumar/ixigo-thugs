import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function ContinueButton({ items }) {
  const { _id } = items;
  // console.log(item,"item");
  return (
    <div>
      <Link to={`/payment/${_id}`} style={{ textDecoration: "none", color: "white" }}>
      <Button
        variant="contained"
        style={{ backgroundColor: "#EC5C30", width: "100%", marginTop: "2rem" }}
      >
        
          
          CONTINUE
       
      </Button>
       </Link>
    </div>
  );
}
export default ContinueButton;
