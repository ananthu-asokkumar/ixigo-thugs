import React from "react";
import style from "./FlightApp.module.css";

const FlightApp = () => {
  return (
    <>
      <div className={style.left_image}>
        <img
          src="https://images.ixigo.com/image/upload/f_auto,w_446/misc/11dff25affd850972ca2a540f7d04a67-armlb.png"
          width="210"
          height="400"
          alt=""
        />
      </div>
      <div className={style.right_image}>
        <p>Get the app on Google Play & App Store</p>
        <br />
        <img
          src="https://images.ixigo.com/image/upload/f_auto,h_90/footer/ba2718516815f5ac278a11a3132c2503-fpwei.png"
          width="150"
          height="45"
          alt=""
        />
        <img
          src="	https://images.ixigo.com/image/upload/f_auto,h_90/footer/3cda19cd2eb5b282f4b49b68e5d55dbd-suamz.png
"
          alt=""
          width="150"
          height="45"
        />
        <img
          src="	https://images.ixigo.com/image/upload/f_auto,h_90/misc/6fefa8456e9c342ffd81321fb381103b-jquxu.png
"
          width="150"
          height="45"
          alt=""
        />
        <br />
        <img
          src="https://images.ixigo.com/image/upload/web/e53437792cbcdd0a4adf86c5e6e63c0d-pcyom.png"
          alt=""
        />
        <br />
        <header>4.4/5 based on 82,560 reviews</header>
      </div>
    </>
  );
};

export default FlightApp;
