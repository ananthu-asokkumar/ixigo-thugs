import React from "react";

function Navbar() {
  return (
    <div>
      <div className="d-flex">
        <div>
          <img
            src="https://images.ixigo.com/image/upload/f_auto/2110b68e66ac684f22adf5b0e0870798-yfwgh.png"
            alt=""
          />
        </div>
        <Link to="/trains" classNamE="m-3">TRAINS</Link>
        <Link to="/buses">BUSES</Link>
        <Link to="/buses">BUSES</Link>
        <Link to="/buses">HOTELS</Link>
        <Link to="/buses">OFFERS</Link>
        <Link to="/buses">CUSTOMER SERVICE</Link>
      </div>
    </div>
  );
}
export default Navbar;
