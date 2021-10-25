import React from "react";

function BasicDiscount() {
  return (
    <div className="card m-2">
      <div className="m-4">
        <h3>Basic</h3>
      </div>
      <div className="d-flex">
        <img
          src="https://images.ixigo.com/image/upload/multi-fare/efadd55349ca6b388290cf823238ea88-dkdpp.png"
          alt=""
          style={{ marginLeft: "30px" }}
        />
        <span className="m-3" style={{ fontSize: "18px" }}>
          Get <strong>₹1000</strong> Off with Code : INSTANT
        </span>
      </div>
      <hr style={{ margin: "15px" }} />
      <div className="d-flex mb-3">
        <img
          src="https://images.ixigo.com/image/upload/multi-fare/efadd55349ca6b388290cf823238ea88-dkdpp.png"
          alt=""
          style={{ marginLeft: "30px" }}
        />
        <span className="m-3" style={{ fontSize: "18px" }}>
          Extra <strong style={{ color: "#EC5B24" }}>₹1000</strong> ₹100 ixigo
          money on UPI Payment
        </span>
      </div>
    </div>
  );
}
export default BasicDiscount;
