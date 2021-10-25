import React from 'react'
import style from './Footer.module.css'

var trdingRoutes = [
  'Pune To Mumbai Flight',
  'Bangalore To Coimbatore Flight',
  'Goa To Bangalore Flight',
  'Patna To Delhi Flight',
  'Bangalore To Pune Flight',
  'Madurai To Chennai Flight',
  'Jaipur To Jodhpur Flight',
  'Coimbatore To Bangalore Flight',
  'Jaipur To Udaipur Flight',
  'Goa To Hyderabad Flight',
  'Bangalore To Mangalore Flight',
  'Siliguri To Kolkata Flight',
  'Ahmedabad To Udaipur Flight',
  'Goa To Pune Flight',
  'Gorakhpur To Delhi Flight',
  'Amritsar To Delhi Flight',
  'Delhi To Jalandhar Flight',
  'Ludhiana To Delhi Flight',
  'Mumbai To Hyderabad Flight',
  'Kolkata To Bhubaneswar Flight'
]

const TradingFlightRoutes = () => {
  return (
    <div className={style.boxmargin}>
      {trdingRoutes.map(item => {
        return <div className={style.Routes_flot}>{item}</div>
      })}
    </div>
  )
}

export default TradingFlightRoutes
