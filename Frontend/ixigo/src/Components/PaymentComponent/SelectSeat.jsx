import React from "react";
import "./SelectSeat.css";
import { useState } from "react";
// import BagFareCondition from "./BagFareCondition";
import { Route } from "react-router-dom";
import FlightCabinBag from "./FlightCabinBag";
import Farerules from "./FareRules";
import TermsCondition from "./TermsCondition";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// style={{ width: "80rem", height: "10rem" }}
function SelectSeat({ items }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="card m-2">
        <div
          className="d-flex  justify-content-between p-2"
          style={{ backgroundColor: "#E1E1E1" }}
        >
          <div style={{ color: "rgba(0,0,0,.64)" }}>
            {items.departurePlace} to {items.arrivalPlace}
          </div>
          <div style={{ fontWeight: "600", color: "rgba(0,0,0,.64)" }}>
            {items.arrivalDate},
            {`${Math.floor(items.durationInMin / 60)}hr ${
              items.durationInMin % 60
            }min`}
          </div>
        </div>
        <div>
          <div className="d-flex container-fluid p-2 ">
            <img
              src={items.image}
              alt=""
              style={{ width: "4%", height: "20%" }}
            />
            <span>{items.flightName}</span>
            <ul className="d-flex">
              <li className="mx-2">{items.flightCode}</li>
              <li className="mx-3">{items.flightClass}</li>
              <li className="mx-3">Standard (Limited seat tilt)</li>
              <li className="mx-2">Narrow</li>
            </ul>

            <div className="" style={{ color: "green", marginLeft: "170px" }}>
              usually on time
            </div>
          </div>
        </div>
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-5">
                    <span>
                      {items.departureCode} <b>{items.departureTime}</b>
                    </span>
                    <br />
                    <span>{items.departureDate}</span>
                    <br />
                    <span>{items.departureAirPort}</span>
                    <br />
                    <span>{items.departurePlace}</span>
                  </div>
                  <div className="col-2 ">
                    <i
                      className="bi bi-stopwatch"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <br />
                    <span>{`${Math.floor(items.durationInMin / 60)}hr ${
                      items.durationInMin % 60
                    }min`}</span>
                  </div>
                  <div className="col-5">
                    <span>
                      {items.arrivalCode} <b>{items.arrivalTime}</b>
                    </span>
                    <br />
                    <span>{items.arrivalDate}</span>
                    <br />
                    <span>{items.arrivalAirport}</span>
                    <br />
                    <span>{items.arrivalPlace}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="my-2">
                      <i className="bi bi-wifi"></i>
                      <span className="mx-2">Wifi</span>
                    </div>
                    <i className="bi bi-egg-fried "></i>
                    <span className="mx-2 my-2">Food</span>
                  </div>
                  <div className="col-6">
                    <div className="my-2">
                      <i
                        className="bi bi-plug-fill"
                        style={{ fontSize: "1.2rem" }}
                      ></i>
                      <span className="" style={{ fontSize: "0.8rem" }}>
                        in-seat Power
                      </span>
                    </div>
                    <i className="bi bi-youtube"></i>
                    <span className="mx-1 " style={{ fontSize: "0.9rem" }}>
                      On Demand Video
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3" style={{ border: "1px  dashed gray" }}></div>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="BAGGES" value="1" />
                <Tab label="FARERULES" value="2" />
                <Tab label="TERMS&CONDITION" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <FlightCabinBag items={items} />
            </TabPanel>
            <TabPanel value="2">
              <Farerules />
            </TabPanel>
            <TabPanel value="3">
              <TermsCondition />
            </TabPanel>
          </TabContext>
        </Box>

        {/* <BagFareCondition />
        <Route path="/_id/baggage">
          <FlightCabinBag />
        </Route>
        <Route path="/farerules">
          <Farerules />
        </Route>
        <Route path="/term&condition">
          <TermsCondition />
        </Route> */}
      </div>

      {/* <div className="container-fluid">
        <div className="row ">
          <div className="col-12 card ">
            <div
              className="d-flex  justify-content-between  conatainer-fluid"
              style={{ backgroundColor: "#E1E1E1" }}
            >
              <div style={{ color: "peru" }}>New Delhi to Mumbai</div>
              <div>Mon,19 Oct 2 hr 5 min</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <span>
                  Air India A188 Economy Narrow3-3 (Standard seat tilt) Narrow
                </span>
              </div>
              <div style={{ color: "green" }}>usually on time</div>
            </div>
            <div style={{ border: "1px  dashed gray" }}></div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-8">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-5">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-12">Mon,18 Oct</div>
                          </div>
                          <div className="row">
                            <div className="col-12">indra gandhi</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">times</div>
                      <div className="col-5">psie0sije</div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-6">
                        <span>wifi</span>
                        <br />
                        <span>food</span>
                      </div>
                      <div className="col-6">
                        <span>in-seat power</span>
                        <br />
                        <span>on demand video</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-3"
                  style={{ border: "1px  dashed gray" }}
                ></div>
                <BagFareCondition />
                <Route path="/baggage">
                  <FlightCabinBag />
                </Route>
                <Route path="/farerules">
                  <Farerules />
                </Route>
                <Route path="/term&condition">
                  <TermsCondition />
                </Route>
              </div>
            </div>
          </div>
        </div>
      // </div> */}
    </div>
  );
}

export default SelectSeat;
