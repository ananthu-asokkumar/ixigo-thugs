import styles from "./BookingdropDown.module.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BookingContext } from "../../Contexts/BookingAuthContextProvider";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BOOKNOW from "./Images/BOOKNOW.PNG";
import rupeeBlack from "./Images/rupeeBlack.png";
import rupeeOrange from "./Images/rupeeOrange.png";
import { Link } from "react-router-dom";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import iconBlock from "./Images/iconBlock.PNG";
import Grid from "@mui/material/Grid";

const BookingDropDown = ({ id }) => {
  const [myFlight, setMyFlight] = useState({});
  const { isdropDown, setIsDropDown } = useContext(BookingContext);
  const [value, setValue] = useState("4");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getAllFlights();

    return () => {};
  }, []);

  console.log(id);
  const getAllFlights = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/flights/${id}`);
      console.log(res, "myflight");
      setMyFlight(res.data);
      // setIsDropDown(null);
      // setIsShow(false);
    } catch (err) {
      console.log("error", err);
    }
  };

  console.log("myflight");
  return (
    <>
      {id === isdropDown ? (
        <Box
          sx={{ width: "100%", typography: "body1", backgroundColor: "white" }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                borderTop: "1px dotted grey",
                marginBottom: "0px",
                paddingBottom: "0px",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="FLIGHT DETAILS" value="1" />
                <Tab label="BAGGAGE" value="2" />
                <Tab label="TERMS&CONDTIONS" value="3" />
                <Tab label="FARE DETAILS" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ paddingTop: "0px" }}>
              <div className={styles.topNav}>
                <img src={myFlight.image} height="30px" width="30px" alt="" />
                <p>{myFlight.flightName}</p>
                <ul className={styles.topList}>
                  <li>{myFlight.flightCode}</li>
                  <li>Economy</li>
                  <li>Narrow 3-3( Limited seat tilt)</li>
                  <li>Narrow</li>
                </ul>
                <p>usually on time</p>
              </div>
              <div className={`${styles.allFlights}`}>
                <div className={`${styles.details}`}>
                  {/* <div className={`${styles.flightCode}`}>
                    <img
                      height="40px"
                      width="50px"
                      src={myFlight.image}
                      alt=""
                    />
                    <p>{myFlight.flightName}</p>
                    <p>{myFlight.flightCode}</p>
                  </div> */}
                  <div className={`${styles.departureDetails}`}>
                    <p style={{ marginTop: "30px", fontSize: "22px" }}>
                      {myFlight.departureCode} {myFlight.departureTime}
                    </p>

                    <p>{myFlight.departureDate}</p>
                    <p>{myFlight.departureAirPort}</p>
                    <p>{myFlight.departurePlace}</p>
                  </div>
                  <div className={`${styles.nonStop}`}>
                    <AccessTimeRoundedIcon sx={{ marginLeft: "15px" }} />
                    <p style={{marginTop:"10px"}}>
                      {`${Math.floor(myFlight.durationInMin / 60)}hr  ${
                        myFlight.durationInMin % 60
                      }min`}{" "}
                    </p>
                  </div>
                  <div className={`${styles.arrivalDetails}`}>
                    <p style={{ marginTop: "30px", fontSize: "22px" }}>
                      {myFlight.arrivalCode} {myFlight.arrivalTime}
                    </p>

                    <p>{myFlight.arrivalDate}</p>
                    <p>{myFlight.arrivalAirport}</p>
                    <p>{myFlight.arrivalPlace}</p>
                  </div>
                </div>
                <div className={`${styles.total}`}>
                  <div style={{ lineHeight: "0cm", marginTop: "20px" }}>
                    <img src={iconBlock} width="300px" alt="" />
                    {/* <div
                      style={{
                        display: "flex",
                        lineHeight: "0cm",
                        marginBottom: "0px",
                        paddingBottom: "0px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        style={{ marginTop: "20px", marginBottom: "0px" }}
                        height="15px"
                        width="15px"
                        src={rupeeOrange}
                        alt=""
                      />
                      <p
                        style={{
                          marginTop: "26px",
                          color: "rgb(236,91,36)",
                          fontWeight: "bold",
                          fontSize: "23px",
                        }}
                      >
                        {myFlight.basicPrice}
                      </p>
                    </div> */}
                    {/* <div
                      style={{
                        display: "flex",
                        marginTop: "0px",
                        lineHeight: "0cm",
                        paddingTop: "0px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        height="10px"
                        width="10px"
                        src={rupeeOrange}
                        alt=""
                      />
                      <p
                        style={{
                          fontSize: "10px",
                          marginTop: "5px",
                          color: "rgb(236,91,36)",
                        }}
                      >
                        {myFlight.offPrice} instant off
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <Grid container spacing={2} sx={{ fontSize: "14px" }}>
                <Grid item xs={6} sx={{ textAlign: "center" }}>
                  Flight
                </Grid>
                <Grid item xs={3} sx={{ textAlign: "center" }}>
                  Cabin Baggage
                </Grid>
                <Grid item xs={3} sx={{ textAlign: "center" }}>
                  Check-in-Baggage
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                style={{
                  background: "rgb(243,243,243)",
                  height: "63px",
                  marginTop: "7px",
                  fontSize: "14px",
                }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRight: "1px dashed grey",
                  }}
                >
                  <img
                    src={myFlight.image}
                    height="35px"
                    width="50px"
                    alt=""
                    style={{ marginRight: "20px" }}
                  />
                  <div style={{ lineHeight: "0" }}>
                    <p
                      style={{
                        marginTop: "0px",
                        paddingTop: "10px",
                        fontSize: "14px",
                      }}
                    >
                      {myFlight.departureCode}-{myFlight.arrivalCode}
                    </p>
                    <p
                      style={{
                        marginTop: "0px",
                        paddingTop: "8px",
                        fontSize: "12px",
                      }}
                    >
                      {myFlight.flightName}
                      {myFlight.flightCode}
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRight: "1px dashed grey",
                  }}
                >
                  7kg
                </Grid>
                <Grid item xs={3} sx={{ textAlign: "center" }}>
                  25 Kilogram
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="3">
              <ul className={`${styles.lists}`}>
                <li>
                  Airlines may charge an additional fee for baggage, insurance,
                  use of credit cards, etc.
                </li>
                <li>
                  Baggage allowance and convenience fee may change based on
                  individual airline policies.
                </li>
                <li>
                  Although we try to ensure price accuracy, we can not guarantee
                  absolute pricing due to the dynamic nature of flight fares
                </li>
                <li>
                  Please note: We are not a travel agency and do not sell
                  tickets directly. Although you can always get in touch with us
                  at feedback@ixigo.com, for any questions regarding your
                  booking, it is advisable to directly contact the travel agency
                  or airline.
                </li>
              </ul>
            </TabPanel>
            <TabPanel value="4">
              <div className={`${styles.booknow}`}>
                {/* <div className={`${styles.refundable}`}>Fully Refundable</div> */}
                <div className={`${styles.assured}`}>
                  <div className={`${styles.header}`}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          marginBottom: "0px",
                          marginLeft: "10px",
                        }}
                      >
                        <p style={{ fontSize: "15px" }}>Assured</p>
                        <img
                          src="https://images.ixigo.com/image/upload/multi-fare/81f93fbf52c351405eb730cd24822c77-ekgbt.png"
                          width="17px"
                          height="17px"
                          style={{
                            marginTop: "15px",
                            marginRight: "10px",
                            marginLeft: "5px",
                          }}
                          alt=""
                        />
                      </div>

                      <p style={{ marginLeft: "0px", marginTop: "0px" }}>
                        at 599
                      </p>
                    </div>
                    <div>
                      <p>Rs{myFlight.basicPrice + 599}</p>
                      <button className={`${styles.btnbook}`}>BOOK</button>
                    </div>
                  </div>
                  <div className={`${styles.assuredContent}`}>
                    <div className={`${styles.assuredItems}`}>
                      <img
                        src="https://images.ixigo.com/image/upload/multi-fare/2d6040c342eaca50133446d58e649b7a-oegom.png"
                        width="17px"
                        height="17px"
                        style={{
                          marginTop: "8px",
                          marginRight: "10px",
                          marginLeft: "5px",
                        }}
                        alt=""
                      />
                      <p>
                        Full refund of upto ₹5000 (over and above airline
                        refund) per person per route if you cancel
                      </p>
                    </div>
                    <div className={`${styles.assuredItems}`}>
                      <img
                        src="https://images.ixigo.com/image/upload/multi-fare/efadd55349ca6b388290cf823238ea88-dkdpp.png"
                        width="17px"
                        height="17px"
                        style={{
                          marginTop: "8px",
                          marginRight: "10px",
                          marginLeft: "5px",
                        }}
                        alt=""
                      />
                      <p>Get ₹500 Off with Code : INSTANT</p>
                    </div>
                    <div className={`${styles.assuredItems}`}>
                      <img
                        src="https://images.ixigo.com/image/upload/multi-fare/efadd55349ca6b388290cf823238ea88-dkdpp.png"
                        width="17px"
                        height="17px"
                        style={{
                          marginTop: "8px",
                          marginRight: "10px",
                          marginLeft: "5px",
                        }}
                        alt=""
                      />
                      <p>Get Ola, Gaana & Lenskart vouchers worth ₹2000</p>
                    </div>
                    <div className={`${styles.assuredItems}`}>
                      <img
                        src="https://images.ixigo.com/image/upload/multi-fare/efadd55349ca6b388290cf823238ea88-dkdpp.png"
                        width="17px"
                        height="17px"
                        style={{
                          marginTop: "8px",
                          marginRight: "10px",
                          marginLeft: "5px",
                        }}
                        alt=""
                      />
                      <p>Extra ₹100 ixigo money on UPI Payment</p>
                    </div>
                    <div className={`${styles.assuredItems}`}>
                      <img
                        src="https://images.ixigo.com/image/upload/multi-fare/699038dc6075ceb407f2bc3cf4900778-vivxt.png"
                        width="17px"
                        height="17px"
                        style={{
                          marginTop: "8px",
                          marginRight: "10px",
                          marginLeft: "5px",
                        }}
                        alt=""
                      />
                      <p>Baggage loss & Trip delay of upto ₹10000</p>
                    </div>
                    <div className={`${styles.assuredItems}`}>
                      <img
                        src="https://images.ixigo.com/image/upload/misc/d188a886171cc0f07a2c57e9f2186429-jgznt.png"
                        width="17px"
                        height="17px"
                        style={{
                          marginTop: "8px",
                          marginRight: "10px",
                          marginLeft: "5px",
                        }}
                        alt=""
                      />
                      <p>Accidental hospitalisation of upto ₹3 Lakhs</p>
                    </div>
                    <div className={`${styles.assuredItems}`}>
                      <img
                        src="https://images.ixigo.com/image/upload/multi-fare/2d6040c342eaca50133446d58e649b7a-oegom.png"
                        width="17px"
                        height="17px"
                        style={{
                          marginTop: "8px",
                          marginRight: "10px",
                          marginLeft: "5px",
                        }}
                        alt=""
                      />
                      <p>Free Cancellation Premium of ₹459 included</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.basic}`}>
                  <div className={`${styles.header}`}>
                    <div>
                      <p>Basic</p>
                      <p>Pay extra for free cancellation</p>
                    </div>
                    <div>
                      <p>Rs{myFlight.basicPrice}</p>
                      <Link to={`/booknow/${myFlight._id}`}>
                        <button className={`${styles.btnbook}`}>BOOK</button>
                      </Link>
                    </div>
                  </div>
                  <div className={`${styles.basicContent}`}>
                    <div className={`${styles.assuredItems}`}>
                      <img
                        src="https://images.ixigo.com/image/upload/multi-fare/efadd55349ca6b388290cf823238ea88-dkdpp.png"
                        width="17px"
                        height="17px"
                        style={{
                          marginTop: "8px",
                          marginRight: "10px",
                          marginLeft: "5px",
                        }}
                        alt=""
                      />
                      <p>Get ₹500 Off with Code : INSTANT</p>
                    </div>
                    <div className={`${styles.assuredItems}`}>
                      <img
                        src="https://images.ixigo.com/image/upload/multi-fare/efadd55349ca6b388290cf823238ea88-dkdpp.png"
                        width="17px"
                        height="17px"
                        style={{
                          marginTop: "8px",
                          marginRight: "10px",
                          marginLeft: "5px",
                        }}
                        alt=""
                      />
                      <p>Extra ₹100 ixigo money on UPI Payment</p>
                    </div>
                    <p>Terms & Conditions</p>
                  </div>
                </div>
              </div>
              {/* <img src={BOOKNOW} alt=""className={`${styles.dropDownContainer}`} /> */}
            </TabPanel>
          </TabContext>
        </Box>
      ) : null}
    </>
  );
};

export default BookingDropDown;
