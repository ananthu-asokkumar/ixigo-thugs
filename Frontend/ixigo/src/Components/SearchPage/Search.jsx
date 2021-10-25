import React, { useState } from "react";
import { CgArrowsExchange } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./Search.css"

const Search = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const handleClick = () => {
        setFrom("");
        setTo("");
    };
    return (
        <>
            <div className="navbar__searchCont">
                <div>
                    <div className="navbar__text">From</div>
                    <div className="navbar___input">
                        <input
                            type="text"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        />
                        <button>X</button>

                        <CgArrowsExchange size="2rem" />
                    </div>
                </div>
                <div>
                    <div className="navbar__text">To</div>
                    <div className="navbar___input">
                        <input
                            type="text"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                        />
                        <button>X</button>
                    </div>
                </div>&nbsp;&nbsp;&nbsp;
                <div>
                    <div className="navbar__text">Date</div>
                    <div className="navbar___input">
                        <input type="date" />
                    </div>
                </div>
                <div className="navbar__searchBtn">
                    <Link to="/payment">
                        <button onClick={handleClick}>Search</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Search;
