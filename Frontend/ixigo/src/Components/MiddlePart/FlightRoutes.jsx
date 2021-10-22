import React from "react";
//import { Link } from "react-router-dom";
import style from "./FlightRoutes.module.css";
//import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const FlightDestination = () => {
  const destination_array = [
    
    {
      src: "https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a8fe4b032e338f13897.jpg",
      title:"lucknow" 
    },
    { src: "https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a83e4b032e338f11b77.jpg" },
    { src: "https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a78e4b032e338f10051.jpg" },
  ];
  const destination_array2 = 
    [
      { src: "https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a83e4b032e338f11cc5.jpg" },
      { src: "https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a5ee4b032e338f0c13f.jpg" },
      { src: "https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a98e4b032e338f14f01.jpg" },
    ];
    
  const destination_array3 =
    [
      { src: "https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a99e4b032e338f151db.jpg" },
      { src: "https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2ab5e4b032e338f191ed.jpg" },
      { src: "https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a82e4b032e338f11a67.jpg" },
    ];

      
  return (
    <>
      <div className={style.mainContainer}>
        {/* {{destination_array.map((item) => {
          return (*/
          <div className={style.BusRoute_container}>
            <header>Best Flight Deals Of The Day</header>
            {/* <p></p> */}
             <div className={style.destination_Container}> 
            {/* {item.route.map((item, index) =>} { */}
            {/* <header>Best Flight Deals Of The Day</header> */}
            <div className={style.image_dest}>
                {destination_array.map((item, index) => (<img src={item.src} key={index} style={{ width: "500px", height: "200px", margin: "35px" }}/>))}
              </div>
              <div className={style.image_dest}>
                {destination_array2.map((item, index) => (<img src={item.src} key={index} style={{ width: "320px", height: "200px", margin: "25px" }} />))}
              </div>
              <div className={style.image_dest}>
                {destination_array3.map((item, index) => (<img src={item.src} key={index} style={{ width: "310px", height: "200px", margin: "25px" }} />))}
              </div>
              <div className={style.showmore}>
                <p>SHOW MORE DESTINATIONS</p>
              </div>
                 </div>
          </div>
        }
      </div>
    </>
  );
};

export default FlightDestination;
