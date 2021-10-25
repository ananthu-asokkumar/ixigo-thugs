import React from "react";
//import { Route } from "react-router-dom";
import PaymentMain from "../PaymentComponent/PaymentMain";
import FlightBooking from "../flight/FlightBooking";
import CustomerForm from "../CustomerDetails/CustomerForm";

import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
//import Trips from "../LandingPage/Trips";
import PaymentGateway from "../PaymentPage/PaymentGateway";
import PaymentPage from "../PaymentPage/PaymentPage";
import Search from "../SearchPage/Search";
const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <LandingPage />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route exact path="/payment/:_id">
                    {/* <PaymentPage/> */}
                     <PaymentGateway />
                </Route>
                {/* <Route exact path="/payment/gateway">
                    <PaymentGateway />
                </Route> */}
                {/* <Route path='/trips'>
                    <Trips />
                </Route> */}
                <Route path="/FlightBooking" exact>
                    <FlightBooking />
                </Route>
                <Route path="/booknow/:_id" exact>
                    <PaymentMain />
                </Route>
{/* 
                <Route path="/payment" exact>
                     <CustomerForm /> 
                    <PaymentGateway/>
                </Route> */}
            </Switch>
        </div>
    );
};

export default Routes;
