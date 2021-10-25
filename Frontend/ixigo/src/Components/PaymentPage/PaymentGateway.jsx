//import React, { useContext } from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PaymentGateway.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useHistory, useParams } from "react-router";
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const PaymentGateway = () => {
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let orderId = Math.floor(Math.random() * 10000000000000000 + 1);
    const history = useHistory();

    const handleOpen = () => {
        setOpen(true);

        /* localStorage.setItem("bookingData", JSON.stringify(bookingData)); */

        setTimeout(() => {
            history.push("/");
        }, 2000);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //protecting route
    //const { userin } = useContext(AuthContext);
    let userLogin = localStorage.getItem("userLogin");
    if (userLogin !== null) {
        var { userinLocal, urlLocal, nameLocal } = JSON.parse(userLogin);
    }
    /* if (!userin && !userinLocal) {
        history.push("/");
    } */
    /* const userData = localStorage.getItem("userDetails");
    let { Age, Gender, FirstName, LastName, Mobile } = JSON.parse(userData) */;

    //local storage
    /* const singleBusdata = localStorage.getItem("currentBusData");
    let {
        discount,
        seatFare,
        busTypeName,
        travelerAgentName,
        arrivalTime,
        startTime,
    } = JSON.parse(singleBusdata);
    let taxes = (seatFare / 100) * 2;
    let total = Math.floor(seatFare - taxes - discount);

    const bookingData = {
        discount,
        seatFare,
        busTypeName,
        travelerAgentName,
        arrivalTime,
        startTime,
        Age,
        Gender,
        FirstName,
        LastName,
        Mobile,
        orderId,
    };  */
    const [MyFlight, setMyFlight] = useState({});
    const { _id } = useParams();
  console.log("flight" + _id);
 useEffect(() => {
    getAllFlights();

    return () => {};
  }, []);

  console.log(_id);
  const getAllFlights = async () => {
    try {
      let res = await axios.get(`http://localhost:5000/flights/${_id}`);
      console.log(res, "myflight");
      setMyFlight(res.data);
    } catch (err) {
      console.log("error", err);
    }
  };
    const { basicPrice } = MyFlight;
  
    console.log("basicPrice",basicPrice);

    return (
        <>
            <div className="gateway__header">
                <Link to="/">
                    <div>
                        <img
                            src="https://images.ixigo.com/image/upload/f_auto/8a178b024470af59d0e1387babf3d02c-imdac.png"
                            alt="ixigo"
                        />
                    </div>
                </Link>
                <div>
                    <div>Jagadish</div>
                </div>
            </div>
            <div className="gateway__cont">
                <div className="gateway__title">
                    <p>AMOUNT TO PAY</p>
                    <h4> ₹ {basicPrice}</h4>
                </div>
                <div className="gateway__upiCont">
                    <div className="gateway__upiContLeft">
                        <div className="gateway__flex gateway__flex_bg">
                            <div>
                                <AccountBalanceWalletIcon />
                            </div>
                            <div>WALLET</div>
                        </div>
                        <div className="gateway__flex">
                            <div>
                                <DoubleArrowIcon />
                            </div>
                            <div>UPI</div>
                        </div>
                        <div className="gateway__flex">
                            <div>
                                <CreditCardIcon />
                            </div>
                            <div>CREDIT/DEBIT CARD</div>
                        </div>

                        <div className="gateway__flex">
                            <div>
                                <AccountBalanceIcon />
                            </div>
                            <div>NET BANKING</div>
                        </div>
                    </div>
                    <div className="gateway__upiContRight">
                        <div>
                            <div>
                                <img
                                    src="https://cdn4.iconfinder.com/data/icons/circle-payment/32/payment_006-amazon-128.png"
                                    alt=""
                                    width="20px"
                                />
                            </div>
                            <div>
                                <p>Amazon pay</p>
                            </div>
                            <div>
                                <button onClick={handleOpen}>PAY SECURLY</button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="gateway__iconTitle">Your money is safe with us</p>
                <div className="gateway__icons">
                    <img
                        src="https://cdn.iconscout.com/icon/free/png-64/mastercard-3384869-2822950.png"
                        alt="master card"
                        width="40px"
                    />
                    <img
                        src="https://www.americanexpress.com/content/dam/amex/uk/benefits/SafeKey_BlueBox_rgb.png"
                        alt="american express"
                        width="40px"
                    />
                </div>
            </div>
            <div className="gateway__footer">
                <p>
                    © 2021 Le Travenues Technology Pvt. Ltd. India. All brands are
                    trademarks of their respective owners.
                </p>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className="gateway__modalCont">
                            <img
                                src="data:image/png;base64,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"
                                alt=""
                                width="70px"
                            />
                            <h3 className="gateway__modalGreen">Payment Successful</h3>
                            <p className="gateway__modalGray">
                                Thank You! Your payment is complete
                            </p>
                            <p> Order Id: {orderId}</p>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    );
};

export default PaymentGateway;
