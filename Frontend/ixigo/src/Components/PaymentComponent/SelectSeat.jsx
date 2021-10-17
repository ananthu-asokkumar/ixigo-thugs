import React from "react";
import "./SelectSeat.css";
import BagFareCondition from "./BagFareCondition";
import { Route } from "react-router-dom";
import FlightCabinBag from "./FlightCabinBag";
import Farerules from "./FareRules";
import TermsCondition from "./TermsCondition";
// style={{ width: "80rem", height: "10rem" }}
function SelectSeat() {
  return (
    <div>
      <div className="card m-2">
        <div
          className="d-flex  justify-content-between p-2"
          style={{ backgroundColor: "#E1E1E1" }}
        >
          <div style={{ color: "rgba(0,0,0,.64)" }}>New Delhi to Mumbai</div>
          <div style={{ fontWeight: "600", color: "rgba(0,0,0,.64)" }}>
            Mon,18 Oct, 2 hr
          </div>
        </div>
        <div>
          <div className="d-flex container-fluid p-2 ">
            <img
              src="https://images.ixigo.com/img/common-resources/airline-new/UK.png"
              alt=""
              style={{ width: "4%", height: "20%" }}
            />
            <span>Vistara UK975</span>
            <ul className="d-flex">
              <li className="mx-2">A320</li>
              <li className="mx-3">Economy</li>
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
                      DEL <b>06.00</b>
                    </span>
                    <br />
                    <span>Mon, 18 Oct</span>
                    <br />
                    <span>Indira Gandhi Intl Airport</span>
                    <br />
                    <span>New Delhi</span>
                  </div>
                  <div className="col-2 ">
                    <i
                      className="bi bi-stopwatch"
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <br />
                    <span>2 hr</span>
                  </div>
                  <div className="col-5">
                    <span>
                      BOM <b>08.00</b>
                    </span>
                    <br />
                    <span>Mon, 18 Oct</span>
                    <br />
                    <span>Chatrapati Shivaji...</span>
                    <br />
                    <span>Mumbai</span>
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
