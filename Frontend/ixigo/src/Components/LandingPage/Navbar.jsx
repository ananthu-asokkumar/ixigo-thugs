import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CgArrowsExchange } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import TransitionsModal from "./LoginModal";
/* import { getRouteBuses } from "./../../Redux/FetchBuses/action"; */
import { useHistory } from "react-router";
//import Login  from "./LoginModal";

const Navbar = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    /* const dispatch = useDispatch(); */
    const history = useHistory();

    const [valid, setValid] = useState(false);

    function handleClick() {
        if (!from || !to) {
            setValid(true);
            return;
        }
        if (from.length && to.length > 2) {
            history.push("/search");
            setValid(false);
        }
        console.log(valid);

        console.log(1);
        /* dispatch(getRouteBuses(from, to)); */
        setFrom("");
        setTo("");
    }
    const handlereset = () => {
        setFrom("");
    };
    const handlereset1 = () => {
        setTo("");
    };
    console.log(from, to);
    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };

    return (
        <div className="navbar__cont">
            <div className="navbar__header">
                <div className="navbar__logo">
                    <Link to="/">
                        <img
                            src="https://images.ixigo.com/image/upload/f_auto/flights/5ec11a1c8448987aab73cf8f1cf397ad-volrt.png"
                            alt="ixigo"
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/">FLIGHTS</Link>
                </div>
                <div>
                    <Link to="/">TRAINS</Link>
                </div>
                <div>
                    <Link to="/">BUSES</Link>
                </div>
                <div>
                    <Link to="/">HOTEL</Link>
                </div>
                <div>
                    <Link to="/">OFFERS</Link>
                </div>
                <div>
                    <Link to="/">TRAVEL STORIES</Link>
                </div>
                <div>
                    <Link to="/">MORE</Link>
                </div>
                <div>
                    <Link to="/">
                        <div className="navbar__profilePic">
                            <TransitionsModal img={<FaRegUserCircle size="2rem" />} />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="navbar__busIcon">
                <div>
                    <img
                        src="https://images.ixigo.com/rt/pc/img/bus/compareBookWhite.png"
                        alt="search"
                    />
                    ;
                </div>
                <div>
                    <p>search . book . go</p>
                </div>
            </div>

            <div className="navbar__searchCont">
                <div>
                    <div className="navbar__text">From</div>
                    <div className="navbar___input">
                        <input
                            type="text"
                            placeholder="leaving from"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            required
                        />
                        <button onClick={handlereset} style={{ cursor: "pointer" }}>
                            X
                        </button>

                        {/* <CgArrowsExchange size="2rem" onClick={handleSwap} /> */}
                    </div>
                    {valid && <p className="navbar__red">Please enter destination </p>}
                </div>
                <div>
                    <div className="navbar__text">To</div>
                    <div className="navbar___input">
                        <input
                            type="text"
                            placeholder="Going to"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            required
                        />

                        <button onClick={handlereset1} style={{ cursor: "pointer" }}>
                            X
                        </button>
                    </div>
                </div>
                <div>
                    <div className="navbar__text">Date</div>
                    <div className="navbar___input">
                        <input className="navbar___inputDate" type="date" />
                    </div>
                </div>
                <div className="navbar__searchBtn">
                    <Link to="/FlightBooking/">
                    <button onClick={handleClick}>Search</button>
                    </Link>
                </div>
            </div>

            <div className="navbar__offerDiv">
                <img
                    src="https://images.ixigo.com/image/upload/bbe8e0440a40b5e274f2bd44b96e5bbc-lraty.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Navbar;
