import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Flightbooking from './Flightbooking'
import PopularFlightOpp from './PopularFlightOpp'
import PopularFlightRoutes from './PopularFlightRoutes'
import TopFlightRoutes from './TopFlightRoutes'
import TradingFlightRoutes from './TradingFlightRoutes'

const FooterRoutes = () => {
  return (
    <div>
     
      <Switch>
        <Route exact path="/" >
          <Flightbooking />
        </Route>
        <Route  path="/popular_opp">
          <PopularFlightOpp />
        </Route>
        <Route  path="/popular_flight">
          <PopularFlightRoutes />
        </Route>
        <Route  path="/top_flight">
          <TopFlightRoutes />
        </Route>
        <Route  path="/trading_flight">
          <TradingFlightRoutes />
        </Route>
      </Switch>
    </div>
  )
}

export default FooterRoutes
